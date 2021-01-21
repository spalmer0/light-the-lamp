import { useEffect, useState } from 'react';
import { getRoster} from '../../services/nhl-api';
import PlayerCard from '../../components/PlayerCard';

function TeamPage(props) {
    const [rosterData, setRosterData] = useState({
        roster: []
      })


      async function getAppData() {
        const data = await getRoster(props.team.id);
        setRosterData(data);
        console.log(data);
      }
    
    
      useEffect(() => {
        getAppData();
        console.log('effect');
      }, []);

      console.log(props);
    
    return (
        <div>
          
            <h1>{props.team.name}</h1>
            <p>Home Arena: {props.team.venue.name}</p>
            <p>First Year of Play: {props.team.firstYearOfPlay}</p>
            <p>{props.team.conference.name} Conference</p>
            <p>Division: {props.team.division.name}</p>
            <a href={props.team.officialSiteUrl} target="_blank" rel="noreferrer">Official Team Site</a>
            <h2>Roster:</h2>
            <div>
              {
              rosterData.roster.map((player, idx) =>
                  <PlayerCard key={idx} player={player} />
                  )
              }
            </div>
        </div>
    );
};

export default TeamPage;