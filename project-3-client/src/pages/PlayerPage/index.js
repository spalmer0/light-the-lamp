import { useEffect, useState } from 'react';
import { getPlayer } from '../../services/nhl-api';

function PlayerPage(props) {
    const [playerData, setPlayersData] = useState();


      async function getAppData() {
        const data = await getPlayer(props.playerId);
        console.log('Player Page', data);
        setPlayersData(data.people[0]);
      }
    
    
      useEffect(() => {
        getAppData();
        console.log('effect');
      }, []);
    
    if (playerData) {
      return (
        <div>
          
            <h1>{playerData.fullName}</h1>
            <p>Jersey Number: {playerData.primaryNumber}</p>
            <p>Position: {playerData.primaryPosition.name}</p>
            <p>Shoots: {playerData.shootsCatches}</p>  
            <p>DOB: {playerData.birthDate}</p>
            <p>Birthplace: {playerData.birthCity}, {playerData.birthCountry}</p>
            <p>Nationality: {playerData.nationality}</p>
            <p>Height: {playerData.height}</p>
            <p>Weight: {playerData.weight}</p>

        </div>
        
      );

    } else {
      return (
        <p>Loading...</p>
      )
    }
};

export default PlayerPage;