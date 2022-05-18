
var InventoryModel = require('../models/Inventory')

  exports.create = function(req, res) {
    if (!req.body.name) {
      return res.status(400).send({'message': 'Name is required'})
    }
    const item = InventoryModel.create(req.body)
    return res.send(item)
  };

  exports.getAll = function(req, res) {
    const items = InventoryModel.findAll()
    res.send(items)
    return 
  };

  exports.getOne = function(req, res) {
    const item = InventoryModel.findOneById(req.params.id)
    if (!item) {
      return res.status(404).send({'message': 'item not found'})
    }
    return res.send(item)
  };

  exports.update = function(req, res) {
    const item = InventoryModel.findOneById(req.params.id)
    if (!item) {
      return res.status(404).send({'message': 'item not found'})
    }
    const updatedItem = InventoryModel.update(req.params.id, req.body)
    return res.status(200).send(updatedItem)
  };

  exports.delete = function(req, res) {
    const item = InventoryModel.findOneById(req.params.id)
    if (!item) {
      return res.status(404).send({'message': 'item not found'})
    }
    const ref = InventoryModel.delete(req.params.id)
    return res.status(204).send(ref)
  };

