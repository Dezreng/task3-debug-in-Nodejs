const express = require('express');
const db = require('./db');
const userRouter = require('./controllers/usercontroller');
const gameRouter = require('./controllers/gamecontroller');

const app = express();

db.sequelize.sync();

app.use(express.json());

app.use('/api/auth', userRouter);

app.use(require('./middleware/validate-session'))

app.use('/api/game', gameRouter);

module.exports = app;