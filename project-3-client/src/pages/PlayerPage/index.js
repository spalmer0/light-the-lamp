import PlayerCard from '../../components/TeamCard';

function TeamPage(props) {
    return (
        <div>
            <h1>{props.team.name}</h1>
            <p>Home Arena: {props.team.venue.name}</p>
            <p>First Year of Play: {props.team.firstYearOfPlay}</p>
            <p>{props.team.conference.name} Conference</p>
            <p>Division: {props.team.division.name}</p>
            <a href={props.team.officialSiteUrl} target="_blank">Official Team Site</a>
        </div>
        // <div>
        // {
        // props.playersData.map((player, idx) =>
        //     <PlayerCard key={idx} player={player} />
        //     )
        // }
        // </div>
    );
};

export default TeamPage;