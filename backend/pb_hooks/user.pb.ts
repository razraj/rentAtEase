/// <reference path="../pb_data/types.d.ts" />

// register "GET http://127.0.0.1:8090/api/signupUser" route (allowed for everyone)
routerAdd("POST", "/api/signupUser", (e) => {
  let body = e.requestInfo().body;
  const { email, password, name } = body;
  let collection = $app.findCollectionByNameOrId("users");
  let record = new Record(collection);
  record.setEmail(email);
  record.validatePassword(password);
  record.setPassword(password);
  record.set("name", name);
  //TODO User Verification Required.
  record.setVerified(true);
  record.newAuthToken();
  $app.save(record);
  return $apis.recordAuthResponse(e, record, "email");
});

// register "GET http://127.0.0.1:8090/api/loginUser" route (allowed for everyone)
routerAdd("POST", "/api/loginUser", (e) => {
  let body = e.requestInfo().body;
  const { email, password } = body;
  let record = e.app.findAuthRecordByEmail("users", email);
  if (!record.validatePassword(password)) {
    // return generic 400 error as a basic enumeration protection
    throw new BadRequestError("Invalid credentials");
  } else {
    return $apis.recordAuthResponse(e, record, "email");
  }
});
