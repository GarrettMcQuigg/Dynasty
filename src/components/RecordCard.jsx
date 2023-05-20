import '../styles/tailwind.css';

const RecordCard = ({ wins, losses }) => {
  return <span>{wins} - {losses}</span>;
};

export default RecordCard;
