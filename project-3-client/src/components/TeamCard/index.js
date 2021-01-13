import { Link } from 'react-router-dom';

function TeamCard(props) {
    
  

  return (
    <div>
      <Link to={`/${props.team.name}`}>
        <p>{props.team.name}</p>
      </Link>
      <p>Home Arena: {props.team.venue.name}</p>
      <p>First Year of Play: {props.team.firstYearOfPlay}</p>
      <p>{props.team.conference.name} Conference</p>
      <p>{props.team.division.name}</p>
      <a href={props.team.officialSiteUrl}>Official Team Site</a>

    </div>
  )
}

export default TeamCard;