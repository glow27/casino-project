import React from 'react';
import './App.scss';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/welcome';
import Demo from './components/Demo/Demo';
import Info from './components/Info/Info';
import Registration from './components/Registration/Registration';
import Roulette2 from './components/Roulette2/Roulette2';
import { Profile } from './components/Profile/Profile';
import Craps from './components/Craps/craps';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Games from './components/Games/Games';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route path="/demo">
                  <Demo />
                </Route>
                <PrivateRoute path="/lk">
                  <Profile />
                </PrivateRoute>
                <Route path="/welcome">
                  <Welcome />
                </Route>
                <PrivateRoute  path="/casino/soccerbet">
                  <Info />
                </PrivateRoute>
                <PrivateRoute path="/casino/craps">
                  <Craps />
                </PrivateRoute>
                <PrivateRoute  path="/roulette">
                  <Roulette2 />
                </PrivateRoute>
                <Route path="/games">
                  <Games />
                </Route>
                <Route  path="/login">
                  <Login />
                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
