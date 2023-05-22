import { useParams } from 'react-router-dom';
import TeamHeader from '../components/TeamHeader';
import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';
import { CircularProgress } from '@mui/material';

const Teampage = () => {
  let { display_name } = useParams();

  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);

      let userData = await getUsersInLeague();
      setUsers(userData.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {rosters.map((roster) => (
        <TeamHeader display_name={display_name} owner_id={roster.owner_id} />
      ))}
    </div>
  );
};

export default Teampage;
