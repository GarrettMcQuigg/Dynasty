import { getUsersInLeague } from '../sleeper';
import { useState, useEffect } from 'react';
import '../styles/tailwind.css';
import Division from './Division';

const TeamData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let userData = await getUsersInLeague();
      setUsers(userData.data);
    };

    fetchData();
  }, []);

  return (
    <>
      {users.map((user, i) => (
        <div key={i}>
          <Division display_name={user.display_name} user_id={user.user_id} />
        </div>
      ))}
    </>
  );
};

export default TeamData;
