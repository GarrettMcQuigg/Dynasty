import StandingsCard from './StandingsCard';
import { getUsersInLeague } from '../sleeper';
import { useState, useEffect } from 'react';
import '../styles/tailwind.css';
import Divider from '@mui/material/Divider';

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
      <div className='font-serif font-semibold tracking-wide pt-6 pb-1'>
        <span className='title'>Standings</span>
      </div>
      <ol className='bg-sleeper-alt rounded-[16px] m-4'>
        <li>
          {users.map((user, i) => (
            <div key={i}>
              <StandingsCard avatar={user.avatar} display_name={user.display_name} user_id={user.user_id} />
              <Divider></Divider>
            </div>
          ))}
        </li>
      </ol>
    </div>
  );
};

export default StandingsData;
