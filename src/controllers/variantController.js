const variantService = require('../services/variantService');

exports.createVariant = async (req, res) => {
  try {
    console.log("body", JSON.stringify(req.body))
    const variant = await variantService.createVariant(req.body);
    res.status(201).json(variant);
  } catch (error) {
    console.log("error", JSON.stringify(error))
    res.status(500).json({ message: error.message });
  }
};