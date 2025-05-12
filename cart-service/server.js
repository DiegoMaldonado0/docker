const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

let cart = [];

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/add-to-cart/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const productResponse = await axios.get(`http://product-service:3001/products`);
    const product = productResponse.data.find(p => p.id == productId);
    
    if (product) {
      cart.push(product);
      res.status(201).json({ message: "Product added to cart", cart });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Cart service running at http://localhost:${port}`);
});
