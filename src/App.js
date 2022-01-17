import './App.css';
import FanInformation from './FanInformation.js';
import PageHeading from './PageHeading';

function App() {

  const ancientBirbsTeam = {
    id: 1,
    name: "Torrano Ancient Birbs",
    city: "Torrano",
    stadium: {
      name: "Birbs Nest",
      capacity: 30000
    }
  }

  const modernBirbs = {
    id: 2,
    name: "Torrano Modern Birbs",
    city: "Torrano",
    stadium: {
      name: "Birb Roost",
      capacity: 30001
    }
  }



  const sportsTeams = [ancientBirbsTeam, modernBirbs];

  
  return (
    <div>
      <PageHeading>
        <h1>All The Sports Teams!!</h1>
        <h2>All The Time</h2>
        <PageHeading />
      </PageHeading>
      <div>
        {
          sportsTeams.map(  (team, index) => {
            return (
            <FanInformation 
            key = {team.id} teamName={team.name}
            number = {index}
            />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
