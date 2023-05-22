import { useParams } from 'react-router-dom';
import TeamHeader from '../components/TeamHeader';

const Rosters = () => {
  let { display_name } = useParams();

  return (
    <div>
      <TeamHeader display_name={display_name}/>
      {/* <TeamPlayers /> */}
    </div>
  );
};

export default Rosters;
