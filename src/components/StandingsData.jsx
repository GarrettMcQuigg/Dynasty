import StandingsCard from './StandingsCard';
import { getLeague, getUsersInLeague, getUsersRosters } from '../sleeper';
import { useState, useEffect } from 'react';
import '../styles/tailwind.css'

const StandingsData = () => {
  const [divisions, setDivisions] = useState([]);
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      let { data } = await getLeague();
      setDivisions(data.metadata.division_1);
    };
    fetchDivisions();
  }, []);

  useEffect(() => {
    const fetchLeague = async () => {
      let { data } = await getUsersInLeague();
      
      setUsers(data);
    };
    fetchLeague();
  }, []);

  useEffect(() => {
    const fetchRosters = async () => {
      let { data } = await getUsersRosters();
      setRosters(data);
      console.log(data);
    };
    fetchRosters();
  }, []);

  return (
    <div className='border border-border-blue rounded-[16px] bg-widget-bg'>
      <h1 className='font-serif font-semibold tracking-wide pt-6 pb-2'><span className='title'>Standings</span></h1>
      <ol className='pt-2 bg-sleeper-alt rounded-[16px] m-4'>
        {users.map((user, i) => (
          <li key={i}>
            <StandingsCard avatar={user.avatar} display_name={user.display_name} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StandingsData;
