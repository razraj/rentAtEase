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
