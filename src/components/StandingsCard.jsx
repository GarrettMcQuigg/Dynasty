import { useEffect, useState } from 'react';
import '../styles/tailwind.css';
import { getUsersRosters } from '../sleeper';
import { useNavigate } from 'react-router-dom';

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
    <div className='flex justify-between sm:text-xl md:py-2 cursor-pointer' onClick={handleClick}>
      <div className='p-4 md:pl-8 flex text-center sm:justify-normal sm:pt-0'>
        <img className='rounded-full sleeper-avatar' src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} />
        <span className='pl-1 md:pl-4'>{display_name}</span>
      </div>
      <div className='flex sm:justify-between justify-end w-[55%] px-4 sm:pt-0 pt-4'>
        {rosters.map((roster, i) => {
          if (user_id === roster.owner_id) {
            if (roster.settings.division === 1) {
              return <div id='division-names' key={i}>{DivisionNames[0]}</div>;
            } else {
              return <div id='division-names' key={i}>{DivisionNames[1]}</div>;
            }
          }
        })}
        <div>0-0</div>
      </div>
    </div>
  );
};

export default StandingsCard;
