/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3771834741")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_3ipLD7ZjKq` ON `vehicleTypes` (`name`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3771834741")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
