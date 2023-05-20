import '../styles/tailwind.css';
import { useNavigate } from 'react-router-dom';

const StandingsCard = ({ display_name, avatar, division }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${display_name}`)
  }

  return (
    <div className='flex justify-between sm:text-xl md:py-2 cursor-pointer'>
      <div className='p-4 md:pl-8 flex text-center  sm:justify-normal sm:pt-0' onClick={handleClick}>
        <img className='rounded-full sleeper-avatar' src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} />
        <span className='pl-1 md:pl-4 pt-1'>{display_name}</span>
      </div>
      <div>
        <span>{division}</span>
      </div>
      <div className='flex pr-1 pt-6 sm:pr-8 sm:pt-1 justify-center sm:justify-end'>
        <span>0-0</span>
      </div>
    </div>
  );
};

export default StandingsCard;
