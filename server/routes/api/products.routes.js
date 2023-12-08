const router = require('express').Router();
const { Product } = require('../../db/models');

router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.findAll({ where: { category } });
    return res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
