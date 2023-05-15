import axios from 'axios';

axios.defaults.baseURL = 'https://api.sleeper.app/v1/league/910957253455355904';

/**
 * Get users in league
 */

export const getUsersInLeague = () => axios.get('/users');

/**
 * Get rosters of users in league
 */

export const getUsersRosters = () => axios.get('/rosters');
