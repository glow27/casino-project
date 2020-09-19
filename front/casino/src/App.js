import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Lk from './components/Cabinet/Lk';
import { Login } from './components/AuthTest/Login';

import { Register } from './components/AuthTest/Register';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
          {/* <Route exact path="/logout">
            <Logout />
          </Route> */}
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
