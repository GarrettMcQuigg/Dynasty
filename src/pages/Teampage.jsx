import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUsersInLeague, getUsersRosters } from '../sleeper';
import TeamHeader from '../components/TeamHeader';
import TeamStarters from '../components/TeamStarters';
// import TeamBench from '../components/TeamBench';

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
    <>
      <div className='flex justify-center text-[color:white] pt-12'>
        {rosters.map((roster, i) => (
          <TeamHeader display_name={display_name} owner_id={roster.owner_id} user_id={user_id} key={i} />
        ))}
      </div>
      <div className='flex justify-center text-[color:white]'>
        {users.map((user, i) => {
          if (user.display_name === display_name) {
            return <TeamStarters display_name={display_name} user_id={user.user_id} key={i} />;
          }
        })}
      </div>
      {/* <div className='flex justify-center text-[color:white] pt-4'>
        {users.map((user, j) => {
          if (user.display_name === display_name) {
            return <TeamBench display_name={display_name} user_id={user.user_id} key={j} />;
          }
        })}
      </div> */}
    </>
  );
};

export default Teampage;
