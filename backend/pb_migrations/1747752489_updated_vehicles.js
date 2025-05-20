/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1602236899")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3616895705",
    "max": 0,
    "min": 0,
    "name": "model",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3771834741",
    "hidden": false,
    "id": "relation4224923691",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "vehicleType",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Available",
      "Rented",
      "Maintenance",
      "Out of Service"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number814182289",
    "max": 10000,
    "min": 100,
    "name": "dailyRate",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1602236899")

  // remove field
  collection.fields.removeById("text3616895705")

  // remove field
  collection.fields.removeById("relation4224923691")

  // remove field
  collection.fields.removeById("select2063623452")

  // remove field
  collection.fields.removeById("number814182289")

  return app.save(collection)
})
