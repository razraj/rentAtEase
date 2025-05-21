/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4047253121",
    "hidden": false,
    "id": "relation1880425762",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "drop",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // remove field
  collection.fields.removeById("relation1880425762")

  return app.save(collection)
})
