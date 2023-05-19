const TickerCards = ({ display_name }) => {
  return (
    <div className=' flex border-2 border-orange-700 p-4 text-[color:white]'>
      <span>{display_name}</span>
    </div>
  );
};

export default TickerCards;
