import React from 'react';
import Header from '../components/Header';
import WeeklyArticle from '../components/WeeklyArticle';
import Rankings from '../components/Rankings';
import Ticker from '../components/Ticker';
import { useState, useEffect } from 'react';
import { getUsersInLeague, getLeague, getUsersRosters } from '../sleeper';
import Standings from '../components/Standings';

const Homepage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await getUsersInLeague();
        setTeams(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

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
    </div>
  );
};

export default Homepage;
