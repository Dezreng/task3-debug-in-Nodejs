const Sequelize = require('sequelize');
const { USER_NAME, PASSWORD } = require('./common/config');
                                //database username   password

const sequelize = new Sequelize('gamedb', USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB1");
				console.log(USER_NAME, PASSWORD)
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)
