const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
	USER_NAME: process.env.USER_NAME,
	PASSWORD: process.env.PASSWORD,
  AUTH_MODE: process.env.AUTH_MODE === 'true'
};