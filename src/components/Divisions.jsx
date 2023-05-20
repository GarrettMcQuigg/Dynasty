import Division1 from './Division1';
import Division2 from './Division2';
import { getUsersInLeague, getLeague, getUsersRosters } from '../sleeper';
import { useState, useEffect } from 'react';

const Divisions = () => {
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [leagues2, setLeagues2] = useState([]);

  let dataMap = new Map();

  useEffect(() => {
    const fetchData = async () => {
      let userData = await getUsersInLeague();
      setUsers(userData.data);

      let { data } = await getUsersRosters();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        dataMap.set(data[i].roster_id, data[i].owner_id);
        setRosters(dataMap);
        console.log(dataMap);
      }

      let leagueData = await getLeague();
      setLeagues(leagueData.data.metadata.division_1);

      let league2Data = await getLeague();
      setLeagues2(league2Data.data.metadata.division_2);

      //   let rosterData = await getUsersRosters();
      //   setRosters(rosterData.data);
    };
    fetchData();
  }, []);
  return (
    <div className='flex justify-center'>
      <Division1 />
      <Division2 />
    </div>
  );
};

export default Divisions;
