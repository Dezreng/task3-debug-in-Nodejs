const router = require('express').Router();
const gamesService = require("../services/game.service");

router.get('/all', async (req, res) => {
	try {
		const gameArr = await  gamesService.getAll( req.user.id );
		res.status(200).json({ games: gameArr, message: "Data fetched." });
	} catch (err) {
		res.status(500).json({ message: "Data not found" });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const game = await gamesService.get( req.params.id, req.user.id );
		res.status(200).json({ game: game });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post('/create', async (req, res) => {
	try {
		const newGame = await gamesService.add( req.body, req.user.id );
		res.status(201).json({ game: newGame, message: "Game created."})
	} catch (err) {
		res.status(500).send(err.message)
	}
});

router.put('/update/:id', async (req, res) => {
	try {
		const updateGame = await gamesService.update( req.body, req.params.id, req.user.id );
		res.status(200).json({ game: updateGame, message: "Successfully updated." });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.delete('/remove/:id', async (req, res) => {
	try {
		const removeGame = await gamesService.remove( req.params.id, req.user.id );
		res.status(200).json({ game: removeGame, message: "Successfully deleted." });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;