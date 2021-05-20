const router = require('express').Router();
const usersService = require("../services/user.service");

router.post('/signup', async (req, res) => {
	try {
		const user = await usersService.signup(req.body);
		res.status(200).json({ user: user.user, token: user.token});
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post('/signin', async (req, res) => {
	try {
		const user = await usersService.signin(req.body);

		if(user.error) {
			res.status(502).send({ error: user.error });
		} else {
			res.json({ user: user.user, message: "Successfully authenticated.", sessionToken: user.token });
		}
	} catch (err) {
		 res.status(403).send({ error: err.message });
	}
});

module.exports = router;