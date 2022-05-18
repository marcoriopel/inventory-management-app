const express = require('express');
const inventory = require("./src/controllers/Inventory")
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.post('/api/item', inventory.create);
app.get('/api/items',inventory.getAll);
app.get('/api/items/:id',inventory.getOne);
app.put('/api/items/:id',inventory.update);
app.delete('/api/items/:id',inventory.delete);