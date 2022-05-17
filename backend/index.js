import Inventory from './src/controllers/Inventory';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.post('/api/item', Inventory.create);
app.get('/api/items', Inventory.getAll);
app.get('/api/items/:id', Inventory.getOne);
app.put('/api/items/:id', Inventory.update);
app.delete('/api/items/:id', Inventory.delete);