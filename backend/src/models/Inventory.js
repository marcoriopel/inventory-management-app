const uuid = require('uuid')

var items = [];


  exports.create = function(data) {
    const newItem = {
      id: uuid.v4(),
      name: data.name,
      price: data.price || '',
      quantity: data.quantity || '',
      description: data.description || '',
      location: data.location || '',
    };
    items.push(newItem);
    return newItem
  }
 
  exports.findOneById = function(id) {
    return items.find(item => item.id === id);
  }

  exports.findAll = function() {
    return items;
  }

  exports.update = function(id, data) {
    const item = this.findOneById(id);
    const index = items.indexOf(item);
    items[index].name = data['name'] || item.name;
    items[index].price = data['price'] || item.price;
    items[index].quantity = data['quantity'] || item.quantity;
    items[index].description = data['description'] || item.description;
    items[index].location = data['location'] || item.location;
    return items[index];
  }

  exports.delete = function(id) {
    const item = this.findOneById(id);
    const index = items.indexOf(item);
    items.splice(index, 1);
    return {};
  }
