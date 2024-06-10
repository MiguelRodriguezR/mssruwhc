const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updateData = req.body;
    const product = await productService.updateProduct(updateData);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};