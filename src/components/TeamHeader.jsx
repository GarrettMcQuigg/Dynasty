import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';
import RecordCard from '../components/RecordCard';

const TeamHeader = ({ display_name, owner_id }) => {
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
    <>
      {users.map((user, i) => {
        if (user.user_id === owner_id) {
          if (user.display_name === display_name) {
            return (
              <div className='border sm:px-8 pl-6 py-6' key={i}>
                <div className='md:flex'>
                  <img className='rounded-full teampage-avatar' key={i} src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} />
                  <div className='flex-col text-center'>
                    <div className='text-xl pt-2 md:pl-4'>{user.display_name.toUpperCase()}</div>
                    <div className='md:pl-4 text-xl pb-4'>
                      {rosters.map((roster, i) => {
                        if (user.user_id === roster.owner_id) {
                          if (user.display_name === display_name) {
                            return <RecordCard wins={roster.settings.wins} losses={roster.settings.losses} key={i}/>;
                          }
                        }
                      })}
                    </div>
                  </div>
                  <div className='flex justify-center w-full md:pl-12 pr-6'>
                    <div className='items-center text-lg'>
                      <div className=''>FAAB Budget Remaining: $100</div>
                      <div className=''>Points For: 0</div>
                      <div className=''>Points Against: 0</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      })}
    </>
  );
};

export default TeamHeader;

{
  /* <img className='rounded-full sleeper-avatar' key={i} src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} /> */
}
