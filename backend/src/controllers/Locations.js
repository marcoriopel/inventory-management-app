
var LocationsModel = require('../models/Locations')

exports.create = function(req, res) {
  console.log("test")
  if (!req.body.name) {
    return res.status(400).send({'message': 'Name is required'})
  }
  const location = LocationsModel.create(req.body)
  return res.send(location)
};

exports.getAll = function(req, res) {
  const locations = LocationsModel.findAll()
  res.send(locations)
  return 
};

exports.getOne = function(req, res) {
  const location = LocationsModel.findOneById(req.params.id)
  if (!location) {
    return res.status(404).send({'message': 'item not found'})
  }
  return res.send(location)
};

exports.delete = function(req, res) {
  const location = LocationsModel.findOneById(req.params.id)
  if (!location) {
    return res.status(404).send({'message': 'item not found'})
  }
  const ref = LocationsModel.delete(req.params.id)
  return res.status(204).send(ref)
};

