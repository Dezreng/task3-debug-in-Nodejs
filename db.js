const Sequelize = require('sequelize');
const { USER_NAME, PASSWORD } = require('./common/config');
                                //database username   password
const sequelize = new Sequelize('gamedb', USER_NAME, PASSWORD, {
    host: 'localhost',
		port: 5433,
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB1");
    },

    function fail(err) {
        console.log(`Error: ${err}`, USER_NAME, PASSWORD);
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./models/user')(sequelize, Sequelize);
db.Game = require('./models/game')(sequelize, Sequelize);


module.exports = db;