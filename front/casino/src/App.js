import React from "react";
import "./App.scss";


import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Welcome from './components/Welcome/welcome'
import Demo from './components/Demo/Demo';
import Info from './components/Info/Info';
import Registration from "./components/Registration/Registration";
import Roulette2 from "./components/Roulette2/Roulette2";
import {Profile} from './components/Profile/Profile'

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Roulette from "./components/Roulette/Roulette";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/demo" component={Demo} />


                <Route exact path="/lk" component={Profile} />
                
                <Route path="/welcome">
                  <Welcome/>
                </Route>
                <Route exact path="/casino/soccerbet">
                  <Info/>
                </Route>
                <Route exact path="/roulette" component={Roulette2} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
