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
    return this.items.find(item => item.id === id);
  }

  exports.findAll = function() {
    return items;
  }

  exports.update = function(id, data) {
    const item = this.findOne(id);
    const index = this.items.indexOf(item);
    this.items[index].name = data['name'] || item.name;
    this.items[index].price = data['price'] || item.price;
    this.items[index].quantity = data['quantity'] || item.quantity;
    this.items[index].description = data['description'] || item.description;
    this.items[index].location = data['location'] || item.location;
    return this.items[index];
  }

  exports.delete = function(id) {
    const item = this.findOne(id);
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return {};
  }
