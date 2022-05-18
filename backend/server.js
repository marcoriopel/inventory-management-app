const express = require('express')
const inventory = require("./src/controllers/Inventory")
const locations = require("./src/controllers/Locations")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

app.use('/', express.static('../frontend/inventory-management-app/dist/inventory-management-app'))

app.post('/api/location', locations.create)
app.get('/api/location',locations.getAll)
app.delete('/api/location/:id',locations.delete)

app.post('/api/item', inventory.create)
app.get('/api/items',inventory.getAll)
app.put('/api/items/:id',inventory.update)
app.delete('/api/items/:id',inventory.delete)