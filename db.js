const Sequelize = require('sequelize');
const { USER_NAME, PASSWORD, DB, DB_HOST, DB_PORT } = require('./common/config');
                                //database username   password
const sequelize = new Sequelize( DB, USER_NAME, PASSWORD, {
    host: DB_HOST,
		port: DB_PORT,
    dialect: 'postgres',
		logging: false,

});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB1");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./models/user')(sequelize, Sequelize);
db.Game = require('./models/game')(sequelize, Sequelize);


module.exports = db;