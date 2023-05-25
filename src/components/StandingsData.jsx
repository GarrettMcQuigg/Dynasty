import { useState, useEffect } from 'react';
import { getUsersInLeague } from '../sleeper';
import StandingsCard from './StandingsCard';
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
    <>
      <div className='font-serif font-semibold tracking-wide pt-6 pb-1'>
        <span className='title'>Standings</span>
      </div>
      <div className='m-4'>
        {users.map((user, i) => (
          <div key={i} className='border border-border-blue rounded-[16px] bg-widget-bg mb-2 sm:pl-0'>
            <StandingsCard avatar={user.avatar} display_name={user.display_name} user_id={user.user_id} />
            <Divider></Divider>
          </div>
        ))}
      </div>
    </>
  );
};

export default StandingsData;
