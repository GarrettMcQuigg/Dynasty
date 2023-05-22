import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';

const TeamHeader = ({ display_name, owner_id }) => {
  let loading = true;
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);
      console.log(rosterData.data);

      let userData = await getUsersInLeague();
      setUsers(userData.data);
      console.log(userData.data);
    };

    fetchData();
  }, []);

  return (
    <div className='text-[color:white]'>
      {users.map((user, i) => {
        if (user.user_id === owner_id) {
          if (user.display_name === display_name) {
            return (
              <div>
                <img className='rounded-full sleeper-avatar' key={i} src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} />
                <span>{user.display_name}</span>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default TeamHeader;

{
  /* <img className='rounded-full sleeper-avatar' key={i} src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} /> */
}
