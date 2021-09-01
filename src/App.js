import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import GameMap from "./pages/GameMap/GameMap";
import About from "./pages/about/About";
import Store from "./pages/store/Store";
import AppContext from "./context/AppContext.js";

function App() {
  const [cityName, setCityName] = useState();
  const [population, setPopulation] = useState();
  const [polution, setPolution] = useState();
  const [transporation, setTransportation] = useState();
  const [buildings, setBuildings] = useState();
  const [houses, setHouses] = useState();
  const [duplexes, setDuplexes] = useState();
  const [bikeFactories, setBikeFactories] = useState();
  const [hondaFactories, setHondaFactories] = useState();
  const [teslaFactories, setTeslaFactories] = useState();
  const [powerPlants, setPowerPlants] = useState();
  const [graphUrl, setGraphUrl] = useState();
  const [sideBarItems, setSideBarItems] = useState();

  return (
    <AppContext.Provider
      value={{
        cityName: cityName,
        setCityName: setCityName,
        population: population,
        setPopulation: setPopulation,
        polution: polution,
        setPolution: setPolution,
        transporation: transporation,
        setTransportation: setTransportation,
        buildings: buildings,
        setBuildings: setBuildings,
        houses: houses,
        setHouses: setHouses,
        duplexes: duplexes,
        setDuplexes: setDuplexes,
        bikeFactories: bikeFactories,
        setBikeFactories: setBikeFactories,
        hondaFactories: hondaFactories,
        setHondaFactories: setHondaFactories,
        teslaFactories: teslaFactories,
        setTeslaFactories: setTeslaFactories,
        powerPlants: powerPlants,
        setPowerPlants: setPowerPlants,
        graphUrl: graphUrl,
        setGraphUrl: setGraphUrl,
        sideBarItems: sideBarItems,
        setSideBarItems: setSideBarItems,
      }}
    >
      <div className="App ">
        <Router>
          <nav className="navbar-container">
            <ul className="game-info">
              <li className="nav-item">Date: </li>
              <li className="nav-item">Credits: </li>
            </ul>
            <ul className="main-navbar">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/game">Game</Link>
              </li>
              <li className="nav-item">
                <Link to="/store">Store</Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/about">About</Link>
            </li> */}
            </ul>
          </nav>
          <Switch>
            {/* <Route path="/about">
            <About />
          </Route> */}
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
    </AppContext.Provider>
  );
}

export default App;
