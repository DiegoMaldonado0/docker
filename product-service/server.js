const express = require('express');
const app = express();
const port = 3001;

let products = [
  { id: 1, name: "Producto A", price: 100 },
  { id: 2, name: "Producto B", price: 150 },
  { id: 3, name: "Producto C", price: 200 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service running at http://localhost:${port}`);
});
