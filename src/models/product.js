const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _model: String,
  _name: String,
  _id: String,
  barcode: String,
  display_name: String,
  id: { type: Number, unique: true },
  list_price: Number,
  qty_available: Number,
  x_costo_provisional: Number,
  create_date: String,
}, { strict: false });  // Cambiar strict a false para permitir campos adicionales

module.exports = mongoose.model('Product', productSchema);