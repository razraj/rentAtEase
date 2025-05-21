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
    let records = arrayOf(new Record());
    $app.recordQuery("vehicles").orderBy("created DESC").all(records);
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
