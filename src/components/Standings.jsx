import StandingsData from './StandingsData';

const Standings = () => {
  return (
    <div className='flex justify-center text-center text-[color:white] w-screen px-8 font-serif md:pt-4'>
      <div className='lg:w-4/5 w-full mb-2'>
        <StandingsData />
      </div>
    </div>
  );
};

export default Standings;