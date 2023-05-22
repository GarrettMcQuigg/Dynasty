import { useParams } from 'react-router-dom';
import TeamHeader from '../components/TeamHeader';
import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';
import TeamPlayers from '../components/TeamPlayers';

const Teampage = () => {
  let { display_name } = useParams();

  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);

      let userData = await getUsersInLeague();
      setUsers(userData.data);
    };

    fetchData();
  }, []);

  let user_id = users.map((user) => {
    return user.user_id;
  });

  return (
    <div>
      <div className='flex justify-center text-[color:white] pt-4'>
        {rosters.map((roster, i) => (
          <TeamHeader display_name={display_name} owner_id={roster.owner_id} key={i} />
        ))}
      </div>
      <div className='flex justify-center text-[color:white]'>
        {rosters.map((roster, i) => {
          return <TeamPlayers display_name={display_name} owner_id={roster.roster_id} user_id={user_id} key={i} teamPlayers={roster.players} />;
        })}
      </div>
    </div>
  );
};

export default Teampage;
