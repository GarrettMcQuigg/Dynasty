import React from 'react';
import Header from '../components/Header';
import WeeklyArticle from '../components/WeeklyArticle';
import Rankings from '../components/Rankings';
import Standings from '../components/Standings';
import Divisions from '../components/Divisions';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='md:flex'>
        <WeeklyArticle />
        <Rankings />
      </div>
      <div className='flex justify-center'>
        <Standings />
      </div>
        <Divisions />
    </div>
  );
};

export default Homepage;
