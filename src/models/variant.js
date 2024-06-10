const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  _model: String,
  _name: String,
  display_name: String,
  create_date: String,
  id: { type: Number },
  product_variant_ids: [Number],
  product_tmpl_id: Number,
});

module.exports = mongoose.model('Variant', variantSchema);