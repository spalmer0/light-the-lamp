import { Link } from 'react-router-dom';

function TeamCard(props) {
    
  

  return (
    <div>
      <Link to={`/${props.team.name}`}>
        <p>{props.team.name}</p>
        
      </Link>
      

    </div>
  )
}

export default TeamCard;