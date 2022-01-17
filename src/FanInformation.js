const FanInformation = (props) => {
     console.log(props);

     // props{
     //      key: 1,
     //      id: 1, 
     //      teamName: "Toranno Ancient Birbs",
     //      number: 0,
     //      city: "Toranno",
     //      stadium: {
     //           name: "Birb Roost",
     //           capacity: 30001
     //           }
     // }

     const {teamName, number, city, stadium, followTeamFunction} = props;

     const followMySpecificTeam = () => {
          props.followTeamFunction(teamName);
     }

     return(
          <div>
               <h2>Welcome to the Fan Area of the {teamName}</h2>
               <p> They are the number {number} team!</p>
               <button onClick={followMySpecificTeam}>I love this team, tell me more!!!</button>
          </div>
     )
}

export default FanInformation;