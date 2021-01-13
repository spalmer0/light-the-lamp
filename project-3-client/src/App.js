
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/userService';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import TeamPage from './pages/TeamPage';
import { getTeams } from './services/nhl-api';

function App(props) {
  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  const [teamsData, setTeamsData] = useState({
    teams: [],
    teamId: Number,
    name: String,
    link: String,
    venue: Object,
    firstYearOfPlay: String,
    conference: Object,
    officialSiteUrl: String
  })

  
  
  async function getAppData() {
    const data = await getTeams();
    setTeamsData(data);
    console.log(data);
  }

  useEffect(() => {
    getAppData();
    console.log('effect');
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


  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              
              <HomePage teamsData={teamsData.teams}/>
            } />
            
            <Route exact path="/dashboard" render={props =>
              userState.user ?
              <DashboardPage />
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
            <Route path="/:team" render={props =>
              
              <TeamPage {...props} 
              />
            } />
          </Switch>
          
        </main>
        
        
      <Footer />
    </div>
  );
}

export default withRouter(App);
