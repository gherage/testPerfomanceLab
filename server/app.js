require('@babel/register');
require('dotenv').config();
const path = require('path');

const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const indexRouter = require('./routes/index.routes');

serverConfig(app);
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
