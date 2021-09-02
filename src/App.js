import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moment from "moment";
import "./App.css";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import GameMap from "./pages/GameMap/GameMap";
import About from "./pages/about/About";
import Store from "./pages/store/Store";
import AppContext from "./context/AppContext.js";

function App() {
  const [cityName, setCityName] = useState();
  const [userName, setUserName] = useState();
  const [population, setPopulation] = useState();
  const [polution, setPolution] = useState();
  const [transporation, setTransportation] = useState();
  const [buildings, setBuildings] = useState();
  const [houses, setHouses] = useState();
  const [duplexes, setDuplexes] = useState();
  const [bikeFactories, setBikeFactories] = useState();
  const [iceFactories, setIceFactories] = useState();
  const [truckFactories, setTruckFactories] = useState();
  const [bussFactories, setBussFactories] = useState();
  const [powerPlants, setPowerPlants] = useState();
  const [graphUrl, setGraphUrl] = useState();
  const [sideBarItems, setSideBarItems] = useState();
  const [buildingItem, setBuildingItem] = useState();
  const [dealershipItem, setDealershipItem] = useState();

  const [date, setDate] = useState(0);

  setInterval(() => {
    setDate((date) => date + 60000);
  }, 1000);

  useEffect(() => {
    setSideBarItems({
      cityName: cityName,
      population: population,
      polution: polution,
      transporation: transporation,
      buildings: buildings,
      houses: houses,
      duplexes: duplexes,
      bikeFactories: bikeFactories,
      iceFactories: iceFactories,
      truckFactories: truckFactories,
      bussFactories: bussFactories,
      powerPlants: powerPlants,
      graphUrl: graphUrl,
    });
  }, [
    cityName,
    population,
    polution,
    transporation,
    buildings,
    houses,
    duplexes,
    bikeFactories,
    iceFactories,
    truckFactories,
    bussFactories,
    powerPlants,
    graphUrl,
  ]);

  return (
    <AppContext.Provider
      value={{
        cityName: cityName,
        setCityName: setCityName,
        userName: userName,
        setUserName: setUserName,
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
        iceFactories: iceFactories,
        setIceFactories: setIceFactories,
        truckFactories: truckFactories,
        setTruckFactories: setTruckFactories,
        bussFactories: bussFactories,
        setBussFactories: setBussFactories,
        powerPlants: powerPlants,
        setPowerPlants: setPowerPlants,
        graphUrl: graphUrl,
        setGraphUrl: setGraphUrl,
        sideBarItems: sideBarItems,
        setSideBarItems: setSideBarItems,
        buildingItem: buildingItem,
        setBuildingItem: setBuildingItem,
        dealershipItem: dealershipItem,
        setDealershipItem: setDealershipItem,
      }}
    >
      <div className="App ">
        <Router>
          <nav className="navbar-container">
            <ul className="game-info">
              <li className="nav-item nav-date">
                Date: {moment(date).format("MMMM Do YYYY, h:mm")}
                {"       "}
              </li>
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
