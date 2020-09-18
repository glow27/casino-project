import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Lk from './components/Cabinet/Lk';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Roulette from './components/Roulette/Roulette'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       

        <Navbar />

        <Switch>
          <Route exact path="/login/new">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/lk">
            <Lk />
          </Route>
          <Route path="/roulette">
            <Roulette />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
