
import InventoryModel from '../models/Inventory';

const Inventory = {

  create(req, res) {
    if (!req.body.name) {
      return res.status(400).send({'message': 'Name is required'});
    }
    const item = InventoryModel.create(req.body);
    return res.status(201).send(item);
  },

  getAll(req, res) {
    const items = InventoryModel.findAll();
    return res.status(200).send(items);
  },

  getOne(req, res) {
    const item = InventoryModel.findOne(req.params.id);
    if (!item) {
      return res.status(404).send({'message': 'item not found'});
    }
    return res.status(200).send(item);
  },

  update(req, res) {
    const item = InventoryModel.findOne(req.params.id);
    if (!item) {
      return res.status(404).send({'message': 'item not found'});
    }
    const updatedItem = InventoryModel.update(req.params.id, req.body)
    return res.status(200).send(updatedItem);
  },

  delete(req, res) {
    const item = InventoryModel.findOne(req.params.id);
    if (!item) {
      return res.status(404).send({'message': 'item not found'});
    }
    const ref = InventoryModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Inventory;