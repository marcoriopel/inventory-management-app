const uuid = require('uuid')

var locations = []


  exports.create = function(data) {
    const newLocation = {
      id: uuid.v4(),
      name: data.name,
    };
    locations.push(newLocation);
    return newLocation
  }
 
  exports.findOneById = function(id) {
    return locations.find(location => location.id === id)
  }

  exports.findAll = function() {
    return locations
  }

  exports.delete = function(id) {
    const location = this.findOneById(id)
    locations.splice(locations.indexOf(location), 1)
    return locations
  }
