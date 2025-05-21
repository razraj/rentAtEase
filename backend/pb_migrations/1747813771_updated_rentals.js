/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // remove field
  collection.fields.removeById("text1100888573")

  // remove field
  collection.fields.removeById("text1880425762")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2768217250")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1100888573",
    "max": 0,
    "min": 0,
    "name": "pickup",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1880425762",
    "max": 0,
    "min": 0,
    "name": "drop",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
