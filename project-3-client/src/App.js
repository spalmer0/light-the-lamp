
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import './App.css';



// 5. import Switch and Route from React Router and then define the various routes for all the pages

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            } />
            <Route exact path="/dashboard" render={props =>
              <Dashboard />
            }/>
            <Route exact path="/signup" render={props =>
              <Signup {...props} />
            }/>
            <Route exact path="/login" render={props =>
              <Login {...props} />
            }/>
            
            
          </Switch>
          
        </main>
      <Footer />
    </div>
  );
}

export default App;
