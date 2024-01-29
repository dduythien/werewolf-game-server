const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gameService } = require('../services');

const createGame = catchAsync(async (req, res) => {
  const user = await gameService.createGame(req.body);
  res.status(httpStatus.CREATED).send(user);
});


module.exports = {
  createGame,
  // getUsers,
  // getUser,
  // updateUser,
  // deleteUser,
};
