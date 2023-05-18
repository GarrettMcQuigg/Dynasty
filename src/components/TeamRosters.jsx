const TeamRosters = ({ rosters }) => {
  <div>
    {rosters ? (
      <ul>
        {rosters.map((roster, i) => {
          <li key={i}>
            <div>{roster.players}</div>
          </li>;
        })}
      </ul>
    ) : (
      <div>
        <p>Error: Code 404. Page not found.</p>
      </div>
    )}
  </div>;
};

export default TeamRosters;
