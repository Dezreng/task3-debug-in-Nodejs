const db = require('../db');
const Game = db.Game;

const getAll = async ( userId ) => {
	const gameArr =	await Game.findAll({ where: { owner_id: userId } });
	return gameArr;
};

const get = async ( gameId, userId ) => {
	const game = await Game.findOne({ where: { id: gameId, owner_id: userId } })

	if (!game) {
		throw new Error("Data not found");
	}

	return game;
}

const add = async ( reqBody, userId ) => {
	const newGame = await Game.create({
		title: reqBody.game.title,
    owner_id: userId,
  	studio: reqBody.game.studio,
    esrb_rating: reqBody.game.esrb_rating,
    user_rating: reqBody.game.user_rating,
    have_played: reqBody.game.have_played
	})

	if (!newGame) {
		throw new Error(newGame);
	}

	return newGame;
};

const update = async ( reqBody, gameId, userId ) => {
	const updateGame = await Game.update({
		title: reqBody.game.title,
    studio: reqBody.game.studio,
    esrb_rating: reqBody.game.esrb_rating,
    user_rating: reqBody.game.user_rating,
    have_played: reqBody.game.have_played
	}, {
    		where: {
        id: gameId,
        owner_id: userId
        }
      });


	if (!updateGame) {
		throw new Error(updateGame);
	}

	return get(gameId, userId);
}

const remove = async ( gameId, userId ) => {
	const removeGame = await Game.destroy({ where: { id: gameId, owner_id: userId } });

	return removeGame;
};

module.exports = { getAll, get, add, update, remove };