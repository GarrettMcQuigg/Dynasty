import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';

const Division = ({ display_name, user_id }) => {
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  const DivisionNames = [`BD's on Lamron`, `O Block`];

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
      {rosters.map((roster) => {
        if (roster.owner_id === user_id) {
          if (roster.settings.division === 1) {
            return (
              <span id='division-names' key={roster.owner_id}>
                {DivisionNames[0]}
              </span>
            );
          } else if (roster.owner_id === user_id) {
            if (roster.settings.division === 2) {
              return (
                <span id='division-names' key={roster.owner_id}>
                  {DivisionNames[1]}
                </span>
              );
            }
          }
        }
      })}
    </>
  );
};

export default Division;
