import React, { useEffect, useState } from "react";
import "./sideMenu.css";

export default function SideMenu() {
  const [cityName, setCityName] = useState("City Name");
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
  });

  return (
    <>
      <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>{sideBarItems ? sideBarItems.cityName : "NA"}</header>
        <div className="active">
          <i className="fas fa-qrcode"></i>
          <span>
            Population: {sideBarItems ? sideBarItems.population : "NA"}
          </span>
        </div>
        <div>
          <i className="fas fa-link"></i>
          <span>Polution: {sideBarItems ? sideBarItems.polution : "NA"}</span>
        </div>
        <div>
          <i className="fas fa-stream"></i>
          <span>
            Transportation: {sideBarItems ? sideBarItems.transporation : "NA"}
          </span>
        </div>
        <div>
          <i className="fas fa-calendar"></i>
          <span>Buildings: {sideBarItems ? sideBarItems.buildings : "NA"}</span>
        </div>
        <div>
          <i className="far fa-question-circle"></i>
          <span>Houses: {sideBarItems ? sideBarItems.houses : "NA"}</span>
        </div>
        <div>
          <i className="fas fa-sliders-h"></i>
          <span>Duplexes: {sideBarItems ? sideBarItems.duplexes : "NA"}</span>
        </div>
        <div>
          <i className="far fa-envelope"></i>
          <span>
            Bike Factories: {sideBarItems ? sideBarItems.duplexes : "NA"}
          </span>
        </div>
        <div>
          <i className="far fa-envelope"></i>
          <span>
            Honda Factories: {sideBarItems ? sideBarItems.hondaFactories : "NA"}
          </span>
        </div>
        <div>
          <i className="far fa-envelope"></i>
          <span>
            Tesla Factories: {sideBarItems ? sideBarItems.teslaFactories : "NA"}
          </span>
        </div>
        <div>
          <i className="far fa-envelope"></i>
          <span>
            Power Plants: {sideBarItems ? sideBarItems.powerPlants : "NA"}
          </span>
        </div>
        <div>
          <i className="far fa-envelope"></i>
          <img
            className="graph"
            src={
              sideBarItems
                ? sideBarItems.graphUrl
                : "http://www.formac-rh.com/wp-content/plugins/motopress-slider-lite/motoslider_core/images/notfound.png"
            }
          />
        </div>
      </div>
    </>
  );
}
