const authController = require('../controller/authController');
const AgeMiddleware = require('../middleware/AgeMiddleware');
const express = require('express');
const app = express.Router();

console.log(authController);

app.post('/register', AgeMiddleware, authController.register); 

app.get('/user/:userId', authController.fetchUser); 

module.exports = app;
