import { getUsersInLeague, getUsersRosters } from '../sleeper';
import { useState, useEffect } from 'react';

const RosterHeader = ({ display_name, avatar }) => {
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);


  return (
    <div className='text-[color:white]'>
      {users.map(user => {
        console.log(user)
      })}
      <span>{display_name}</span>
      <span>RECORD</span>
      <span>DIVISION</span>
    </div>
  );
};

export default RosterHeader;
