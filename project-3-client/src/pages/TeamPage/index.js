import { useEffect, useState } from 'react';
import { getPlayers} from '../../services/nhl-api';
import PlayerCard from '../../components/PlayerCard';

function TeamPage(props) {
    const [playersData, setPlayersData] = useState({
        roster: []
      })

      async function getAppData() {
        const data = await getPlayers();
        setPlayersData(data);
        console.log(data);
      }
    
    
      useEffect(() => {
        getAppData();
        console.log('effect');
      }, []);
    
    return (
        <div>
            <h1>{props.team.name}</h1>
            <p>Home Arena: {props.team.venue.name}</p>
            <p>First Year of Play: {props.team.firstYearOfPlay}</p>
            <p>{props.team.conference.name} Conference</p>
            <p>Division: {props.team.division.name}</p>
            <a href={props.team.officialSiteUrl} target="_blank">Official Team Site</a>
            {/* {
            props.playersData.map((player, idx) =>
                <PlayerCard key={idx} player={player} />
                )
            } */}
    </div>
    );
};

export default TeamPage;