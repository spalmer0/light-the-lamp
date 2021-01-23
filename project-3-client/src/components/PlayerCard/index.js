import { Link } from 'react-router-dom';



function PlayerCard(props) {
  
  const playerObject = {
    pathname: `/player/${props.player.person.id}`,
    state: {id:props.player.person.id, teamId:props.teamId}
  }
  
  return (
    <div>

      <Link to={playerObject} style={{textDecoration: 'none'}}>
        <p>{props.player.person.fullName}</p>
      </Link>
   

    </div>
  )
}

export default PlayerCard;