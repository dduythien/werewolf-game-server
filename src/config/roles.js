const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const playerRoles = {
  HOST: 'HOST',
  PLAER: 'PLAYER'
};

const gamePlayerRoles = {
  VILLAGER: 'VILLAGER',
  WITCH: 'WITCH',
  HUNTER: 'HUNTER',
  SEER: 'SEER',
  WEREWOLVES: 'WEREWOLVES',
  GUARDIAN: 'GUARDIAN'
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
  gamePlayerRoles,
  playerRoles
};
