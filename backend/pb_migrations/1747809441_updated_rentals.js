/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1602236899",
    "hidden": false,
    "id": "relation498639500",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "vehicleId",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1602236899",
    "hidden": false,
    "id": "relation498639500",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "vehicalId",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
