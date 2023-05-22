import StandingsCard from './StandingsCard';
import { getUsersInLeague } from '../sleeper';
import { useState, useEffect } from 'react';
import '../styles/tailwind.css';

const StandingsData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let userData = await getUsersInLeague();
      setUsers(userData.data);
    };

    fetchData();
  }, []);


  return (
    <div className='border border-border-blue rounded-[16px] bg-widget-bg'>
      <div className='font-serif font-semibold tracking-wide pt-6 pb-2'>
        <span className='title'>Standings</span>
      </div>
      <ol className='pt-2 bg-sleeper-alt rounded-[16px] m-4'>
        <li>
          {users.map((user, i) => (
            <StandingsCard avatar={user.avatar} display_name={user.display_name} user_id={user.user_id} key={i} />
          ))}
        </li>
      </ol>
    </div>
  );
};

export default StandingsData;
