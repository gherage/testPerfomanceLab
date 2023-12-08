const router = require('express').Router();

const authApiRouter = require('./api/auth.routes.js');
const productsApiRouter = require('./api/products.routes.js');
const cartApiRouter = require('./api/cart.routes.js');

router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);
router.use('/api/cart', cartApiRouter);

module.exports = router;
