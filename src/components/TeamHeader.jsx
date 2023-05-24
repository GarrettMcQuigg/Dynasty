import { useState, useEffect } from 'react';
import { getUsersInLeague, getUsersRosters } from '../sleeper';
import RecordCard from '../components/RecordCard';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

const TeamHeader = ({ display_name, owner_id }) => {
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);

  const DivisionNames = [`Division 1`, `Division 2`];

  useEffect(() => {
    const fetchData = async () => {
      let rosterData = await getUsersRosters();
      setRosters(rosterData.data);
      // console.log(rosterData.data);

      let userData = await getUsersInLeague();
      setUsers(userData.data);
      //   console.log(userData.data)
    };

    fetchData();
  }, []);

  const idMap = new Map();

  users.map((user) => {
    if (user.display_name === display_name) {
      idMap.set(display_name, user.user_id);
    }
  });

  return (
    <>
      {users.map((user, i) => {
        if (user.user_id === owner_id) {
          if (user.display_name === display_name) {
            return (
              <div className='border border-border-blue rounded-[16px] bg-widget-bg sm:px-8 pl-6 py-6 md:w-[60%]' key={i}>
                <div className='md:flex '>
                  <img className='teampage-avatar mt-2' key={i} src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} />
                  <div className='flex-col text-center'>
                    <div className='text-xl pt-2 md:pl-4 pr-6 sm:pr-0'>{user.display_name.toUpperCase()}</div>
                    <div className='md:pl-4 pr-6 sm:pr-0 text-xl pb-4'>
                      {rosters.map((roster, i) => {
                        if (user.user_id === roster.owner_id) {
                          if (user.display_name === display_name) {
                            return <RecordCard wins={roster.settings.wins} losses={roster.settings.losses} key={i} />;
                          }
                        }
                      })}
                    </div>
                  </div>
                  {/* <div className='flex md:justify-end w-full pt-3 md:pl-12 sm:pr-0 pr-6'>
                    <span>Next Matchup: {display_name}</span>
                  </div> */}
                </div>
                <div className='md:flex justify-center w-full font-serif'>
                  <div className='md:flex items-center justify-between w-full text-lg'>
                    <div className='py-4 md:py-0'>
                      {rosters.map((ros) => {
                        if (ros.owner_id === idMap.get(display_name)) {
                          return <span key={ros.owner_id}>FAAB Budget: ${100 - ros.settings.waiver_budget_used}</span>;
                        }
                      })}
                    </div>
                    <div className='pb-4 md:py-0 md:px-2'>
                      <span>
                        {rosters.map((ros) => {
                          if (ros.owner_id === idMap.get(display_name)) {
                            if (ros.settings.division === 1) {
                              return <span key={ros.owner_id}>{DivisionNames[0]}</span>;
                            } else if (ros.settings.division === 2) {
                              return <span key={ros.owner_id}>{DivisionNames[1]}</span>;
                            }
                          }
                        })}
                      </span>
                    </div>
                    <div className='pb-4 md:py-0'>
                      <div>Divisional Ranking</div>
                      <div className='ordinal grid md:justify-items-center'>
                        <HorizontalRuleOutlinedIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pr-4'>
                  <p>
                    <h1>OFFSEASON ROSTER TAKES</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam distinctio illum, aliquid quas dolor?
                    Molestiae ullam pariatur perferendis eius laudantium ut, magni facere, unde vitae blanditiis minus iure voluptates!
                  </p>
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
