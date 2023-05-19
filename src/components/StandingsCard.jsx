import '../styles/tailwind.css';
import { useState, useEffect } from 'react';
import { getUsersRosters, getUsersInLeague } from '../sleeper';
import { render } from 'react-dom';

const StandingsCard = ({ display_name, avatar }) => {
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRosters = async () => {
      let { data } = await getUsersRosters();
      setRosters(data);
    };
    fetchRosters();
  }, []);

  useEffect(() => {
    const fetchLeague = async () => {
      let { data } = await getUsersInLeague();
      setUsers(data);
    };
    fetchLeague();
  }, []);

  return (
    <div className='flex justify-between sm:text-xl md:py-2 cursor-pointer'>
      <div className='p-4 md:pl-8 flex text-center  sm:justify-normal sm:pt-0'>
        <img className='rounded-full sleeper-avatar' src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} />
        <span className='pl-1 md:pl-4 pt-1'>{display_name}</span>
      </div>
      <div className='flex pr-1 pt-6 sm:pr-8 sm:pt-1 justify-center sm:justify-end'>
        {users.user_id === rosters.owner_id && (
            <div>{rosters.map((roster, i) => (
                <span key={i}>{roster.settings.wins}-{roster.settings.losses}</span>
            ))}</div> 
        )}
      </div>
    </div>
  );
};

export default StandingsCard;
