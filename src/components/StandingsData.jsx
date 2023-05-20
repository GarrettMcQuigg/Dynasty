import StandingsCard from './StandingsCard';
import { getUsersInLeague, getLeague, getUsersRosters } from '../sleeper';
import { useState, useEffect } from 'react';
import '../styles/tailwind.css';

const StandingsData = () => {
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [leagues2, setLeagues2] = useState([]);

//   let userSet = new Set();

  useEffect(() => {
    const fetchData = async () => {
      let userData = await getUsersInLeague();
      setUsers(userData.data);

      let { data } = await getUsersRosters();

      let leagueData = await getLeague();
      setLeagues(leagueData.data.metadata.division_1);

      let league2Data = await getLeague();
      setLeagues2(league2Data.data.metadata.division_2);

      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);
    };
    fetchData();
  }, []);

  //   function getUser(rosters, users) {
  //     let left = 0;
  //     let right =
  //     for (let i = 0; i < rosters.length; i++) {
  //       for (let j = 0; j < users.length; j++) {
  //         if (rosters[i].owner_id === users[j].user_id) {
  //           userSet.has()
  //         }
  //       }
  //     }
  //   }

  return (
    <div className='border border-border-blue rounded-[16px] bg-widget-bg'>
      <div className='font-serif font-semibold tracking-wide pt-6 pb-2'>
        <span className='title'>Standings</span>
      </div>
      <ol className='pt-2 bg-sleeper-alt rounded-[16px] m-4'>
        {users.map((user, i) => (
          <li key={i}>
            <StandingsCard avatar={user.avatar} display_name={user.display_name} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StandingsData;
