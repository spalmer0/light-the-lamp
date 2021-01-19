import { Link } from 'react-router-dom';

function TeamCard(props) {
    
  

  return (
    <div>
      <Link to={`/team/${props.team.id}`}>
        <p>{props.team.name}</p>
        
        
      </Link>
      

    </div>
  )
}

export default TeamCard;