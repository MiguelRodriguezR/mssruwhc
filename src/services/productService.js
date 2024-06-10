const Product = require('../models/product');

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

exports.updateProduct = async (updateData) => {
  const { id, ...rest } = updateData;
  const product = await Product.findOneAndUpdate({ id: id }, rest, { new: true });
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};