import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters, getPlayers } from '../sleeper';

const TeamPlayers = ({ display_name, owner_id, user_id, teamPlayers }) => {
  const [rosters, setRosters] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);

      //   let userData = await getUsersInLeague();
      //   setUsers(userData.data);

      let playerData = await getPlayers();
      setPlayers(playerData.data);
    };

    fetchData();
  }, []);
  return <div></div>;
};

export default TeamPlayers;
