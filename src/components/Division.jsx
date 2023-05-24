import { useState, useEffect } from 'react';
import { getUsersRosters } from '../sleeper';

const Division = ({ user_id }) => {
  const [rosters, setRosters] = useState([]);

  const DivisionNames = [`BD's on Lamron`, `O Block`];

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);
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
