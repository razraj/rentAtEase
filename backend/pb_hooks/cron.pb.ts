/// <reference path="../pb_data/types.d.ts" />

/**
 * Cron job run end of day to check and update vehicles status according to endDate
 * use macro: @daily
 */
cronAdd("hello", "*/55 * * * *", () => {
  try {
    const currentDate = new DateTime();
    const filterExpression = "status = {:status} ";
    const bindParams = {
      status: "Rented",
    };
    let records = arrayOf(new Record());
    $app
      .recordQuery("vehicles")
      .where($dbx.exp(filterExpression, bindParams))
      .orderBy("created DESC")
      .all(records);
    console.log("🚀 ~ cronAdd ~ records:", records);

    records.map((record) => {
      let rentalRecords = new Record();
      $app
        .recordQuery("rentals")
        .where(
          $dbx.exp("vehicleId = {:id}", {
            id: record.id,
          })
        )
        .one(rentalRecords);
      console.log("🚀 ~ records.map ~ rentalRecords:", rentalRecords);
      console.log(
        "🚀 ~ records.map ~ rentalRecords:",
        rentalRecords.getDateTime("endDate")
      );
      console.log("🚀 ~ records.map ~ rentalRecords:", currentDate);

      if (rentalRecords.getDateTime("endDate") < currentDate) {
        rentalRecords.set("status", "Completed");
        $app.save(rentalRecords);

        console.log("true");
        record.set("status", "Available");
        $app.save(record);
      } else {
        console.log("false");
      }
    });
  } catch (error) {
    console.log(error);
  }
});
