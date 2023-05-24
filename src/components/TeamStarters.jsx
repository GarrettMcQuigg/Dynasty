import { useState, useEffect } from 'react';
import { getUsersRosters, getPlayers } from '../sleeper';
import PlayerAvatar from './PlayerAvatar';
import '../styles/tailwind.css';

const TeamPlayers = ({ user_id }) => {
  const [rosters, setRosters] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);

      let playerData = await getPlayers();
      setPlayers(playerData.data);
      //   localStorage.setItem('allPlayerData', JSON.stringify(playerData.data));
    };

    fetchData();
  }, []);

  return (
    <>
      {rosters.map((roster, idx) => {
        if (roster.owner_id === user_id) {
          return (
            <div key={idx} className='pt-4 md:w-2/5 xl:w-1/4'>
              <h1 className='font-serif font-medium text-lg tracking-wide'>Starters</h1>
              {roster.starters.map((ros, i) => {
                return (
                  <div key={i} className='border border-border-blue rounded-[16px] bg-widget-bg pl-2 pr-6 mb-2'>
                    {Object.values(players).map((player, j) => {
                      if (player.player_id === ros) {
                        return (
                          <div className='flex pt-2' key={j}>
                            <PlayerAvatar position={player.position} player_id={player.player_id} />
                            <div className='flex pb-1'>
                              <div className='flex-col'>
                                <span key={player.player_id}>
                                  {player.first_name} {player.last_name}
                                </span>
                                <span className='pl-2 pt-1 text-xs text-[color:#607D7F] font-semibold'>
                                  <span>
                                    {player.position} - {player.team}
                                  </span>
                                </span>
                                <div className='flex items-center text-[color:#607D7F] font-semibold'>
                                  <div className='text-xs pr-2'>
                                    <span className='pr-2'>Years Pro: {player.years_exp}</span>
                                    <span>Age: {player.age}</span>
                                  </div>
                                  {player.injury_status ? <div className='text-xs text-[color:#D42965]'>{player.injury_status.slice(0, 4)}</div> : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default TeamPlayers;
