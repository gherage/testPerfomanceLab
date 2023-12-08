const router = require('express').Router();
const { Cart, Product } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const userId = req.session.userId;
    const itemInCart = await Cart.findOne({
      where: { user_id: userId, product_id: id },
    });
    if (!itemInCart) {
      await Cart.create({ user_id: userId, product_id: id });
      const product = await Product.findOne({ where: { id } });
      return res.json(product);
    }
    return res.json();
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.session.userId;
    await Cart.destroy({
      where: { user_id: userId, product_id: productId },
    });
    return res.json({ id: productId });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const productsInCart = await Cart.findAll({
      where: { user_id: userId },
      include: { model: Product },
    });
    products = productsInCart.map((el) => el.Product);
    return res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
