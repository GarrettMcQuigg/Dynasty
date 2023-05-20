import RosterHeader from '../components/RosterHeader';
import { useParams } from 'react-router-dom';

const Rosters = () => {
  let { display_name } = useParams();

  return (
    <>
      <RosterHeader display_name={display_name} />
      {/* <Players /> */}
    </>
  );
};

export default Rosters;
