import TeamCard from '../../components/TeamCard';


function HomePage(props) {
    return (
        <div>
            {
            props.teamsData.map((team, idx) =>
                <TeamCard key={idx} team={team} />
                )
            }
        </div>
    );
};

export default HomePage;