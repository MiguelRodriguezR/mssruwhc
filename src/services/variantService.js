const Variant = require('../models/variant');
const Product = require('../models/product');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

exports.createVariant = async (variantData) => {
  const { product_tmpl_id, id, product_variant_ids, create_date, _model } = variantData;

  // Encuentra el producto por product_tmpl_id
  const product = await Product.findOne({ id: product_tmpl_id });

  if (!product) {
    throw new Error('Product not found');
  }

  // Verifica si las fechas de creación son iguales
  if (product.create_date === create_date) {
    return { message: 'No se envía webhook porque las fechas de creación son iguales' };
  }

  // Calcula el nuevo barcode
  const newBarcode = `${product.barcode}${id}`;

  // Obtén el x_costo_provisional del producto
  const cost = product.x_costo_provisional;

  // Construye el cuerpo de la solicitud
  const requestBody = {
    _model: _model,
    _id: id,
    id: id,
    barcode: newBarcode,
    cost: cost,
  };

  // Espera un segundo antes de enviar la petición al webhook externo
  const webhookUrl = process.env.EXTERNAL_WEBHOOK_URL;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await axios.post(webhookUrl, requestBody, { timeout: 10000 })

  return requestBody;
};
