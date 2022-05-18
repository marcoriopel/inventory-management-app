
var InventoryModel = require('../models/Inventory')

  exports.create = function(req, res) {
    if (!req.body.name) {
      res.status(400)
      return res.send({'message': 'Name is required'})
    }
    return res.send(InventoryModel.create(req.body))
  };

  exports.getAll = function(req, res) {
    return res.send(InventoryModel.findAll())
  };

  exports.update = function(req, res) {
    const item = InventoryModel.findOneById(req.params.id)
    if (!item) {
      res.status(404)
      return res.send({'message': 'item not found'})
    }
    return res.send(InventoryModel.update(req.params.id, req.body))
  };

  exports.delete = function(req, res) {
    if (!InventoryModel.findOneById(req.params.id)) {
      res.status(404)
      return res.send({'message': 'item not found'})
    }
    return res.send(InventoryModel.delete(req.params.id))
  };

