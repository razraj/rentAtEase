/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3771834741")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select753727511",
    "maxSelect": 1,
    "name": "Type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Bike",
      "Car"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3771834741")

  // remove field
  collection.fields.removeById("select753727511")

  return app.save(collection)
})
