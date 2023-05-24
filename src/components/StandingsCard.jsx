import { useEffect, useState } from 'react';
import '../styles/tailwind.css';
import { getUsersRosters, getUsersInLeague } from '../sleeper';
import { useNavigate } from 'react-router-dom';
import RecordCard from './RecordCard';

const StandingsCard = ({ display_name, avatar, user_id }) => {
  const [rosters, setRosters] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${display_name}`);
  };

  const DivisionNames = [`BD's on Lamron`, `O Block`];

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await getUsersRosters();
      setRosters(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className='flex justify-between items-center sm:text-xl py-4 cursor-pointer hover:text-[color:#00ceb8] hover:bg-[color:#25414e] hover:rounded-[16px]'
      onClick={handleClick}
    >
      <div className='md:pl-8 flex text-center sm:justify-normal sm:pt-0'>
        <img className='rounded-full sleeper-avatar' src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} />
        <span className='pl-1 md:pl-4 pt-2'>{display_name}</span>
      </div>
      <div className='flex sm:justify-between justify-end w-[55%] px-4 sm:pt-2 pt-6'>
        {rosters.map((roster, i) => {
          if (user_id === roster.owner_id) {
            if (roster.settings.division === 1) {
              return (
                <div id='division-names' key={i}>
                  {DivisionNames[0]}
                </div>
              );
            } else {
              return (
                <div id='division-names' key={i}>
                  {DivisionNames[1]}
                </div>
              );
            }
          }
        })}
        <div className='pb-1'>
          {rosters.map((roster, i) => {
            if (user_id === roster.owner_id) {
              return <RecordCard wins={roster.settings.wins} losses={roster.settings.losses} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default StandingsCard;
