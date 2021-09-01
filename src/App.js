import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import GameMap from "./pages/GameMap/GameMap";
import About from "./pages/about/About";
import Store from "./pages/store/Store";

function App() {
  return (
    <div className="App ">
      <Router>
        <nav className="navbar-container">
          <ul className="game-info">
            <li className="nav-item">Date: </li>
            <li className="nav-item">Credits: </li>
          </ul>
          <ul className="main-navbar">
            {/* <li className="nav-item">
              <Link to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/game">Game</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/game">
            <GameMap />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
      <div className="bg-isometric">
        <div className="isometric"></div>
      </div>
    </div>
  );
}

export default App;
