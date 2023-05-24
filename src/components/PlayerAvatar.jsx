const PlayerAvatar = ({ position, player_id }) => {
  return (
    <>
      {position === 'DEF' || player_id > 8700 ? (
        <div className='pl-2 pt-1 pr-4'>
          <span>No Photo</span>
        </div>
      ) : (
        <img className='player-avatar pr-2' key={player_id} src={`https://sleepercdn.com/content/nfl/players/thumb/${player_id}.jpg`} />
      )}
    </>
  );
};

export default PlayerAvatar;
