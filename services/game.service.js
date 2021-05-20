const gamesRepo = require("../memoryRepositorys/game.memory.repository");

const getAll = ( userId ) => gamesRepo.getAll( userId );

const get = ( gameId, userId ) => gamesRepo.get( gameId, userId );

const add = ( reqBody, userId ) => gamesRepo.add( reqBody, userId );

const update = ( reqBody, gameId, userId ) => gamesRepo.update( reqBody, gameId, userId );

const remove = ( gameId, userId ) => gamesRepo.remove( gameId, userId )

module.exports = { getAll, get, add, update, remove };