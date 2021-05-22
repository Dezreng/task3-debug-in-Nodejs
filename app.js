const express = require('express');
const db = require('./db');
const userRouter = require('./controllers/usercontroller');
const gameRouter = require('./controllers/gamecontroller');
const validateSession = require('./middleware/validate-session');

const app = express();

db.sequelize.sync();

app.use(express.json());

app.use('/api/auth', userRouter);

app.use(validateSession)

app.use('/api/game', gameRouter);

module.exports = app;