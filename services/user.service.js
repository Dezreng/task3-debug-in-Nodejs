const usersRepo = require("../memoryRepositorys/user.memory.repository");

const signup = ( reqBody ) => usersRepo.signup( reqBody );

const signin = ( reqBody ) => usersRepo.signin( reqBody );

module.exports = { signup, signin }