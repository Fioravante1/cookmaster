const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const users = require('../controllers/userController');
const login = require('../controllers/loginController');

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

const { userValidate } = require('../middlewares/userMiddlewares');
const { validateEmailPassword } = require('../middlewares/loginMiddlewares');

app.use('/users', userValidate, users);
app.use('/login', validateEmailPassword, login);

module.exports = app;
