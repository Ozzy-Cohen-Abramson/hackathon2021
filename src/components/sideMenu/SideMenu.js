import React, { useState, useContext } from "react";
import "./sideMenu.css";
import AppContext from "../../context/AppContext.js";

export default function SideMenu() {
  /*const [cityName, setCityName] = useState("City Name");
  const [population, setPopulation] = useState(1500);
  const [polution, setPolution] = useState("145 AQI");
  const [transporation, setTransportation] = useState("150 cars");
  const [buildings, setBuildings] = useState(15);
  const [houses, setHouses] = useState(5);
  const [duplexes, setDuplexes] = useState(2);
  const [bikeFactories, setBikeFactories] = useState(5);
  const [hondaFactories, setHondaFactories] = useState(2);
  const [teslaFactories, setTeslaFactories] = useState(10);
  const [powerPlants, setPowerPlants] = useState(9);
  const [graphUrl, setGraphUrl] = useState(
    "https://www.seekpng.com/png/full/14-142766_line-graph-graphs-transparent-png.png"
  );
  const [sideBarItems, setSideBarItems] = useState({
    cityName: cityName,
    population: population,
    polution: polution,
    transporation: transporation,
    buildings: buildings,
    houses: houses,
    duplexes: duplexes,
    bikeFactories: bikeFactories,
    hondaFactories: hondaFactories,
    teslaFactories: teslaFactories,
    powerPlants: powerPlants,
    graphUrl: graphUrl,
  });*/
  /*const [cityName, setCityName] = useState();
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
  const [sideBarItems, setSideBarItems] = useState();*/
  const appContext = useContext(AppContext);

  return (
    <div className="sidebar-container">
      <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>
          <h1>
            {appContext.sideBarItems ? appContext.sideBarItems.cityName : "NA"}
          </h1>
        </header>
        <div className="active">
          <i className="fas"></i>
          <span>
            Population:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.population
              : "NA"}
          </span>
        </div>
        <div>
          <i className="fas"></i>
          <span>
            Polution:{" "}
            {appContext.sideBarItems ? appContext.sideBarItems.polution : "NA"}
          </span>
        </div>
        <div>
          <i className="fas"></i>
          <span>
            Energy:{" "}
            {appContext.sideBarItems ? appContext.sideBarItems.energy : "NA"}
          </span>
        </div>
        <div>
          <i className="fas"></i>
          <span>
            Buildings:{" "}
            {appContext.sideBarItems ? appContext.sideBarItems.buildings : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Houses:{" "}
            {appContext.sideBarItems ? appContext.sideBarItems.houses : "NA"}
          </span>
        </div>
        <div>
          <i className="fas"></i>
          <span>
            Duplexes:{" "}
            {appContext.sideBarItems ? appContext.sideBarItems.duplexes : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Bike Factories:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.bikeFactories
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            ICE car Factories:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.iceFactories
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Truck Shop:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.truckFactories
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Buss Shop:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.bussFactories
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Power Plants:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.powerPlants
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Nueclear power plant:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.nuclearPlants
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Solar panel:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.solarPlants
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <span>
            Wind power plant:{" "}
            {appContext.sideBarItems
              ? appContext.sideBarItems.windPlants
              : "NA"}
          </span>
        </div>
        <div>
          <i className="far"></i>
          <img
            className="graph"
            src={
              appContext.sideBarItems
                ? appContext.sideBarItems.graphUrl
                : "http://www.formac-rh.com/wp-content/plugins/motopress-slider-lite/motoslider_core/images/notfound.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
