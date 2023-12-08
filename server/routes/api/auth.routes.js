const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/sign-in', async (req, res) => {
  try {
    const { name } = req.body;
    let user = await User.findOne({ where: { name } });
    if (user) {
      req.session.userId = user.id;
      return res.json(user);
    } else {
      user = await User.create({ name });
      req.session.userId = user.id;
      return res.json(user);
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid')

      .json({ message: 'success' });
  });
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json({ message: 'success', user });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
