
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/userService';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';


function App(props) {
  const [ userState, setUserState ] = useState({
    user: getUser()
  });

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
              <HomePage />
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
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
