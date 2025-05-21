/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1602236899")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4047253121",
    "hidden": false,
    "id": "relation2041417573",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "currentLocation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1602236899")

  // remove field
  collection.fields.removeById("relation2041417573")

  return app.save(collection)
})
