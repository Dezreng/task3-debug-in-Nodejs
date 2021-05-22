const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const User = db.User;

const signup = async ( reqBody ) => {
	const user = await User.create({
		full_name: reqBody.user.full_name,
    username: reqBody.user.username,
    passwordHash: await bcrypt.hash(reqBody.user.password, 10),
    email: reqBody.user.email,
	});

	if (!user) {
		throw new Error(user);
	} 

  return userRespons(user);
};

const signin = async ( reqBody ) => {
	const user = await User.findOne({ where: { username: reqBody.user.username } });

	if (!user) {
		throw new Error("User not found.");
	}
	
	const matches = bcrypt.compare(reqBody.user.password, user.passwordHash);

  if (matches) {
    const token = jwt.sign({ id: user.id }, 'lets_play_sum_games_man', { expiresIn: 60 * 60 * 24 });
		return { user: userRespons(user), token };
  } else {
		return { error: "Passwords do not match." };
  }
};

const userRespons = (user) => {
	const { id, full_name, username, email, updatedAt, createdAt } = user;
	return { id, full_name, username, email, updatedAt, createdAt };
};

module.exports = { signup, signin };