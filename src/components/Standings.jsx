import StandingsData from './StandingsData';

const Standings = () => {
  return (
    <div className='flex justify-center text-center text-[color:white] w-screen px-8 font-serif'>
      <div className='lg:w-4/5 w-full mb-6'>
        <StandingsData />
      </div>
    </div>
  );
};

export default Standings;
