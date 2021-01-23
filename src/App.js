
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/userService';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import TeamPage from './pages/TeamPage';
import { getTeams } from './services/nhl-api';
import PlayerPage from './pages/PlayerPage';
import styled from 'styled-components';
import ice from './images/ice.jpg';
// import { fetchTeams, addFavorite } from './services/teamService';


const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    flex-grow: 1;
    padding: 50px;
    background-image: url(${ice});
    background-repeat: no-repeat;
    background-size: 100%;
    
  }
`;

function App(props) {
  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  const [teamsData, setTeamsData] = useState({
    teams: []
  })
  async function getAppData() {
    const data = await getTeams();
    setTeamsData(data);
    console.log(data);
  }


  useEffect(() => {
    getAppData();
  }, []);

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();

    setUserState({ user: null });

    props.history.push('/');
  }

  // async function handleFavorite(teamId) {
  //   try {
  //     const { data } = await addFavorite(userData.user.uid, teamId);
  //     setTeamData({
  //       topThree: getTopThree(data.results), 
  //       nowPlaying: data 
  //     });

  //   } catch (error) {

  //   }
  // }


  return (
    <StyledApp>
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage teamsData={teamsData.teams}/>
            } />
            
            <Route exact path="/" render={props =>
              userState.user ?
              <HomePage teamsData={teamsData.teams}/>
                :
              <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props =>
              <SignupPage
                {...props}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route exact path="/login" render={props =>
              <LoginPage
                {...props}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route path="/team/:id" render={props =>
              userState.user ?
              <TeamPage team={teamsData.teams.find(team => {
                return team.id === Number(props.match.params.id)
              })}
              // handleFavorite={handleFavorite}
              />
              :
              <Redirect to="/login" /> 
            } />
            <Route path="/player/:id" render={props => {
              return userState.user ? <PlayerPage {...props} playerId={props.match.params.id}/> : <Redirect to="/login" />

            }

            } />
          </Switch>
          
        </main>
        
        
      <Footer />
    </StyledApp>
  );
}

export default withRouter(App);
