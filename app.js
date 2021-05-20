var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
const { PORT } = require('./common/config');

app.use(express.json());

app.use(async (req, res, next) => {
	await db.sequelize.sync();
	next();
})

app.use('/api/auth', user);

app.use(require('./middleware/validate-session'))

app.use('/api/game', game);

app.listen(PORT, function() {
    console.log("App is listening on 4000");
})