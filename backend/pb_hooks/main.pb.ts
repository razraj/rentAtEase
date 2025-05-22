/// <reference path="../pb_data/types.d.ts" />

// register "GET http://127.0.0.1:8090/api/vehicleTypes" route (allowed for everyone)
routerAdd(
  "GET",
  "/api/vehicleTypes",
  (e) => {
    let records = arrayOf(new Record());
    $app.recordQuery("vehicleTypes").orderBy("created DESC").all(records);
    return e.json(200, records);
    // let info = e.requestInfo();

    // let authRecord = info.auth;

    // let isGuest = !info.auth;
    // return e.json(200, authRecord);
  },
  $apis.requireAuth()
);

// register "GET http://127.0.0.1:8090/api/vehicles" route (allowed for everyone)
routerAdd(
  "GET",
  "/api/vehicles",
  (e) => {
    const filterExpression = "status = {:status} ";
    const bindParams = {
      status: "Available",
    };
    let records = arrayOf(new Record());
    $app
      .recordQuery("vehicles")
      .where($dbx.exp(filterExpression, bindParams))
      .orderBy("created DESC")
      .all(records);
    return e.json(200, records);
  },
  $apis.requireAuth()
);

// register "GET http://127.0.0.1:8090/api/vehicles" route (allowed for everyone)
routerAdd(
  "GET",
  "/api/rentals",
  (e) => {
    let records = arrayOf(new Record());
    $app.recordQuery("rentals").orderBy("created DESC").all(records);
    return e.json(200, records);
  },
  $apis.requireAuth()
);

// register "GET http://127.0.0.1:8090/api/checkVehicleAvailability" route (allowed for auth user only)
routerAdd(
  "POST",
  "/api/checkVehicleAvailability",
  (e) => {
    let body = e.requestInfo().body;
    const { vehicleId, startDate, endDate } = body;
    const filterExpression =
      "vehicleId = {:inputVehicleId} AND endDate > {:inputStartDate} AND startDate < {:inputEndDate}";
    const conflictingRecord = arrayOf(new Record());
    const bindParams = {
      inputVehicleId: vehicleId,
      inputStartDate: startDate,
      inputEndDate: endDate,
    };
    try {
      $app
        .recordQuery("rentals")
        .where($dbx.exp(filterExpression, bindParams))
        .all(conflictingRecord);
      return e.json(200, conflictingRecord);
    } catch (error) {
      console.error("Error checking vehicle availability:", error);
      throw new ApiError(500, "Error checking availability. Please try again.");
    }

    // const result = arrayOf(
    //   new DynamicModel({
    //     id: "",
    //     created: "",
    //   })
    // );
    // $app
    //   .db()
    //   .newQuery(
    //     "SELECT id,created FROM rentals WHERE vehicleId={:vehicleId} and endDate >= {:from} and startDate <= {:to}"
    //   )
    //   .bind({
    //     vehicleId: vehicleId,
    //     from: "2025-05-21 12:00:00.000Z",
    //     to: "2025-05-31 12:00:00.000Z",
    //   })
    //   .all(result);
    // return e.json(200, result);
  },
  $apis.requireAuth()
);

routerAdd(
  "POST",
  "/api/bookVehicle",
  (e) => {
    let body = e.requestInfo().body;
    const { vehicleId, startDate, endDate } = body;
    const filterExpression =
      "vehicleId = {:inputVehicleId} AND endDate > {:inputStartDate} AND startDate < {:inputEndDate}";

    const conflictingRecord = arrayOf(new Record());
    const bindParams = {
      inputVehicleId: vehicleId,
      inputStartDate: startDate,
      inputEndDate: endDate,
    };
    try {
      $app
        .recordQuery("rentals")
        .where($dbx.exp(filterExpression, bindParams))
        .all(conflictingRecord);
      // return e.json(200, conflictingRecord);
    } catch (error) {
      console.error("Error checking vehicle availability:", error);
      throw new ApiError(500, "Error checking availability. Please try again.");
    }
    if (conflictingRecord.length == 0) {
      let collection = $app.findCollectionByNameOrId("rentals");

      let record = new Record(collection);
      let info = e.requestInfo();

      let authRecord = info.auth;
      record.set("userId", authRecord?.id);
      record.set("vehicleId", vehicleId);
      record.set("startDate", startDate);
      record.set("endDate", endDate);
      record.set("status", "Booked");
      // validate and persist
      // (use saveNoValidate to skip fields validation)
      $app.save(record);

      let updateRecord = $app.findRecordById("vehicles", vehicleId);
      updateRecord.set("status", "Rented");
      $app.save(updateRecord);
      return e.json(200, updateRecord);
    } else {
      throw new ApiError(500, "Error Vehicle availability. Please try again.");
    }
  },
  $apis.requireAuth()
);
