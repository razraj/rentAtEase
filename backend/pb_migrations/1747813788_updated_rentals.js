/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4047253121",
    "hidden": false,
    "id": "relation1100888573",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "pickup",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // remove field
  collection.fields.removeById("relation1100888573")

  return app.save(collection)
})
