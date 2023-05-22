import axios from 'axios';

axios.defaults.baseURL = 'https://api.sleeper.app/v1';

/**
 * Get league by ID
 */

export const getLeague = () => axios.get('/league/910957253455355904');

/**
 * Get users in league
 */

export const getUsersInLeague = () => axios.get('/league/910957253455355904/users');

/**
 * Get rosters of users in league
 */

export const getUsersRosters = () => axios.get('/league/910957253455355904/rosters');

/**
 * Get rosters of users in league
 */

export const getUsersMatchups = () => axios.get('/league/910957253455355904/matchups/1');

/**
 * Get nfl players
 */

export const getPlayers = () => axios.get('/players/nfl');
