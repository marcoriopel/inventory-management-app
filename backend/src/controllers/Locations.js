
var LocationsModel = require('../models/Locations')
var InventoryModel = require('../models/Inventory')

exports.create = function(req, res) {
  if (!req.body.name) {
    res.status(400)
    return res.send({'message': 'Name is required'})
  }
  return res.send(LocationsModel.create(req.body))
};

exports.getAll = function(req, res) {
  return res.send(LocationsModel.findAll())
};

exports.getOne = function(req, res) {
  const location = LocationsModel.findOneById(req.params.id)
  if (!location) {
    res.status(404)
    return res.send({'message': 'item not found'})
  }
  return res.send(location)
};

exports.delete = function(req, res) {
  const location = LocationsModel.findOneById(req.params.id)
  if (!location) {
    res.status(404)
    return res.send({'message': 'item not found'})
  }
  var inventoryItems = InventoryModel.findAllByLocation(location.name)
  for (let index = 0; index < inventoryItems.length; index++) {
    InventoryModel.delete(inventoryItems[index].id)
  }
  return res.send(LocationsModel.delete(req.params.id))
};

