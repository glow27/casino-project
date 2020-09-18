import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Lk from './components/Cabinet/Lk';
import { Login } from './components/login/Login';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/lk">
            <Lk />
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
