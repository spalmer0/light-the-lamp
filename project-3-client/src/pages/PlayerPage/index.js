import { useEffect, useState } from 'react';
import { getPlayer } from '../../services/nhl-api';
import styled from 'styled-components';

const StyledPage = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
      
      
      margin: 10px;
    }

    div {
      align-items: center;
      border-left: 1px solid black;
      margin: 10px;
    }

    p {
      margin-left: 10px;
    }

`;

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
        <StyledPage>
          
            <h1>{playerData.fullName}</h1>
            <div>
              <p>Jersey Number: {playerData.primaryNumber}</p>
              <p>Position: {playerData.primaryPosition.name}</p>
              <p>Shoots: {playerData.shootsCatches}</p>  
              <p>DOB: {playerData.birthDate}</p>
              <p>Birthplace: {playerData.birthCity}, {playerData.birthCountry}</p>
              <p>Nationality: {playerData.nationality}</p>
              <p>Height: {playerData.height}</p>
              <p>Weight: {playerData.weight}</p>
            </div>

        </StyledPage>
        
      );

    } else {
      return (
        <p>Loading...</p>
      )
    }
};

export default PlayerPage;