const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

//Routes go here
router.route("/products").get(async (req, res) => {
  const products = [];

  let product;

  for (let i = 0; i < 100; i++) {
    product = {};
    product.name = faker.commerce.productName();
    product.category = faker.commerce.department();
    product.price = faker.commerce.price();
    product.description = faker.commerce.productDescription();

    if (Math.random() < 0.1) {
      const key = Object.keys(product)[Math.floor(Math.random() * 4)];
      delete product[key];
    }
    products.push(product);
  }
  res.status(200).json(products);
});

module.exports = router;
