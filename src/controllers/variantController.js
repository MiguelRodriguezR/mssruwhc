const variantService = require('../services/variantService');

exports.createVariant = async (req, res) => {
  try {
    const variant = await variantService.createVariant(req.body);
    res.status(201).json(variant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};