import React, { useContext, useEffect, useState } from "react";
import tripleBuilding from "../../img-buildings/1989010_building_icon.svg";
import bicycle from "../../img-buildings/6159284_bicycle_bike_cycling_isometric_mountain bike_icon.svg";
import carIcon from "../../img-buildings/1988880_car_front_vehicle_icon.svg";
import truckIcon from "../../img-buildings/1988878_front_lorry_truck_vehicle_icon.svg";
import busIcon from "../../img-buildings/1988879_bus_front_public transport_vehicle_icon.svg";
import AppContext from "../../context/AppContext";

import "./cityMap.css";
export default function CityMap(props) {
  const appContext = useContext(AppContext);
  const { imageSrc } = props;

  const [newImage, setNewImage] = useState("");

  const imageElement = `<div class="tile-item"><img class="tile-img" src=${imageSrc} /></div>`;

  const setImageFunction = (e) => {
    if (!e.target.innerHTML || imageSrc) {
      setNewImage(imageElement);
      e.target.innerHTML = imageElement;
    }
    console.log(appContext.buildingItem.type);
    if (appContext.population) {
      appContext.setPopulation(
        appContext.population + appContext.buildingItem.population
      );
    } else {
      appContext.setPopulation(appContext.buildingItem.population);
    }
    if (appContext.buildingItem.type === "House") {
      if (appContext.houses) {
        appContext.setHouses(appContext.houses + 1);
      } else {
        appContext.setHouses(1);
      }
      if (appContext.buildings) {
        appContext.setBuildings(appContext.buildings + 1);
      } else {
        appContext.setBuildings(1);
      }
    }
    if (appContext.buildingItem.type === "Duplex") {
      if (appContext.duplexes) {
        appContext.setDuplexes(appContext.duplexes + 1);
      } else {
        appContext.setDuplexes(1);
      }
      if (appContext.buildings) {
        appContext.setBuildings(appContext.buildings + 1);
      } else {
        appContext.setBuildings(1);
      }
    }
    if (appContext.buildingItem.type === "Triple story building") {
      if (appContext.buildings) {
        appContext.setBuildings(appContext.buildings + 1);
      } else {
        appContext.setBuildings(1);
      }
    }
  };

  return (
    <div className="map-wrapper">
      {/* <img className="tile-item" src={tripleBuilding} /> */}
      <div className="container">
        <div className="tile a1" onClick={setImageFunction}></div>
        <div className="tile a2" onClick={setImageFunction}></div>
        <div className="tile a3" onClick={setImageFunction}></div>
        <div className="tile a4" onClick={setImageFunction}></div>
        <div className="tile a5" onClick={setImageFunction}></div>
        <div className="tile a6" onClick={setImageFunction}></div>
        <div className="tile a7" onClick={setImageFunction}></div>
        <div className="tile a8" onClick={setImageFunction}></div>
        <div className="tile a9" onClick={setImageFunction}></div>
        <div className="tile a10" onClick={setImageFunction}></div>
        <div className="tile b1" onClick={setImageFunction}></div>
        <div className="tile c1" onClick={setImageFunction}></div>
        <div className="tile d1" onClick={setImageFunction}></div>
        <div className="tile e1" onClick={setImageFunction}></div>
        <div className="tile f1" onClick={setImageFunction}></div>
        <div className="tile g1" onClick={setImageFunction}></div>
        <div className="tile h1" onClick={setImageFunction}></div>
        <div className="tile i1" onClick={setImageFunction}></div>
        <div className="tile j1" onClick={setImageFunction}></div>
        <div className="tile b2" onClick={setImageFunction}></div>
        <div className="tile b3" onClick={setImageFunction}></div>
        <div className="tile b4" onClick={setImageFunction}></div>
        <div className="tile b5" onClick={setImageFunction}></div>
        <div className="tile b6" onClick={setImageFunction}></div>
        <div className="tile b7" onClick={setImageFunction}></div>
        <div className="tile b8" onClick={setImageFunction}></div>
        <div className="tile b9" onClick={setImageFunction}></div>
        <div className="tile b10" onClick={setImageFunction}></div>
        <div className="tile c2" onClick={setImageFunction}></div>
        <div className="tile c3" onClick={setImageFunction}></div>
        <div className="tile c4" onClick={setImageFunction}></div>
        <div className="tile c5" onClick={setImageFunction}></div>
        <div className="tile c6" onClick={setImageFunction}></div>
        <div className="tile c7" onClick={setImageFunction}></div>
        <div className="tile c8" onClick={setImageFunction}></div>
        <div className="tile c9" onClick={setImageFunction}></div>
        <div className="tile c10" onClick={setImageFunction}></div>
        <div className="tile d2" onClick={setImageFunction}></div>
        <div className="tile d3" onClick={setImageFunction}></div>
        <div className="tile d4" onClick={setImageFunction}></div>
        <div className="tile d5" onClick={setImageFunction}></div>
        <div className="tile d6" onClick={setImageFunction}></div>
        <div className="tile d7" onClick={setImageFunction}></div>
        <div className="tile d8" onClick={setImageFunction}></div>
        <div className="tile d9" onClick={setImageFunction}></div>
        <div className="tile d10" onClick={setImageFunction}></div>
        <div className="tile e2" onClick={setImageFunction}></div>
        <div className="tile e3" onClick={setImageFunction}></div>
        <div className="tile e4" onClick={setImageFunction}></div>
        <div className="tile e5" onClick={setImageFunction}></div>
        <div className="tile e6" onClick={setImageFunction}></div>
        <div className="tile e7" onClick={setImageFunction}></div>
        <div className="tile e8" onClick={setImageFunction}></div>
        <div className="tile e9" onClick={setImageFunction}></div>
        <div className="tile e10" onClick={setImageFunction}></div>
        <div className="tile f2" onClick={setImageFunction}></div>
        <div className="tile f3" onClick={setImageFunction}></div>
        <div className="tile f4" onClick={setImageFunction}></div>
        <div className="tile f5" onClick={setImageFunction}></div>
        <div className="tile f6" onClick={setImageFunction}></div>
        <div className="tile f7" onClick={setImageFunction}></div>
        <div className="tile f8" onClick={setImageFunction}></div>
        <div className="tile f9" onClick={setImageFunction}></div>
        <div className="tile f10" onClick={setImageFunction}></div>
        <div className="tile g2" onClick={setImageFunction}></div>
        <div className="tile g3" onClick={setImageFunction}></div>
        <div className="tile g4" onClick={setImageFunction}></div>
        <div className="tile g5" onClick={setImageFunction}></div>
        <div className="tile g6" onClick={setImageFunction}></div>
        <div className="tile g7" onClick={setImageFunction}></div>
        <div className="tile g8" onClick={setImageFunction}></div>
        <div className="tile g9" onClick={setImageFunction}></div>
        <div className="tile g10" onClick={setImageFunction}></div>
        <div className="tile h2" onClick={setImageFunction}></div>
        <div className="tile h3" onClick={setImageFunction}></div>
        <div className="tile h4" onClick={setImageFunction}></div>
        <div className="tile h5" onClick={setImageFunction}></div>
        <div className="tile h6" onClick={setImageFunction}></div>
        <div className="tile h7" onClick={setImageFunction}></div>
        <div className="tile h8" onClick={setImageFunction}></div>
        <div className="tile h9" onClick={setImageFunction}></div>
        <div className="tile h10" onClick={setImageFunction}></div>
        <div className="tile i2" onClick={setImageFunction}></div>
        <div className="tile i3" onClick={setImageFunction}></div>
        <div className="tile i4" onClick={setImageFunction}></div>
        <div className="tile i5" onClick={setImageFunction}></div>
        <div className="tile i6" onClick={setImageFunction}></div>
        <div className="tile i7" onClick={setImageFunction}></div>
        <div className="tile i8" onClick={setImageFunction}></div>
        <div className="tile i9" onClick={setImageFunction}></div>
        <div className="tile i10" onClick={setImageFunction}></div>
        <div className="tile j2" onClick={setImageFunction}></div>
        <div className="tile j3" onClick={setImageFunction}></div>
        <div className="tile j4" onClick={setImageFunction}></div>
        <div className="tile j5" onClick={setImageFunction}></div>
        <div className="tile j6" onClick={setImageFunction}></div>
        <div className="tile j7" onClick={setImageFunction}></div>
        <div className="tile j8" onClick={setImageFunction}></div>
        <div className="tile j9" onClick={setImageFunction}></div>
        <div className="tile j10" onClick={setImageFunction}></div>
      </div>
    </div>
  );
}
