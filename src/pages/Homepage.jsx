import React from 'react';
import Header from '../components/Header';
import WeeklyArticle from '../components/WeeklyArticle';
import Rankings from '../components/Rankings';
import Standings from '../components/Standings';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='md:flex pb-4'>
        <WeeklyArticle />
        <Rankings />
      </div>
      <div className='flex justify-center'>
        <Standings />
      </div>
    </div>
  );
};

export default Homepage;
