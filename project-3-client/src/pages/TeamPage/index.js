import { useEffect, useState } from 'react';
import { getRoster} from '../../services/nhl-api';
import PlayerCard from '../../components/PlayerCard';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const StyledPage = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .teamInfo {
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
    }

    .roster {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      border-left: 1px solid black;
      margin: 10px;
      padding-left: 20px;
      text-decoration: none;
    }

    .roster p {
      &:hover {
      text-decoration: none;  
      background-color: rgb(108,117,124);
      color: #fff;
      }
    }

   

    @media (max-width: 1100px) {
        div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

`;

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
        <StyledPage>
          
            <div className="teamInfo">
              <h1>{props.team.name}</h1>
              <p>Home Arena: {props.team.venue.name}</p>
              <p>First Year of Play: {props.team.firstYearOfPlay}</p>
              <p>{props.team.conference.name} Conference</p>
              <p>Division: {props.team.division.name}</p>
              <a href={props.team.officialSiteUrl} target="_blank" rel="noreferrer">Official Team Site</a>
              <br/>
              <Link to="/">
                <Button variant="secondary" type="submit">
                  Go Back to All Teams
                </Button>

              </Link>
            </div>
            <div className="roster">
              <h2>Roster:</h2>
              {
              rosterData.roster.map((player, idx) =>
                  <PlayerCard key={idx} player={player} style={{ textDecoration: 'none' }} />
                  )
              }
            </div>
        </StyledPage>
    );
};

export default TeamPage;