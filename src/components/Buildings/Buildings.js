import React, { useContext, useEffect, useState } from "react";
import houseImage from "../../img-buildings/1988994_building_home_house_icon.svg";
import tripleBuilding from "../../img-buildings/1989010_building_icon.svg";
import duplex from "../../img-buildings/1988992_building_home_house_icon.svg";
import AppContext from "../../context/AppContext";

import "./building.css";

export default function Buildings(props) {
  const appContext = useContext(AppContext);
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, building) => {
    const parentElement = e.target.parentElement;
    const img = parentElement.children[1].children[1].src;
    console.log(building);
    appContext.setBuildingItem(building);
    appContext.setDealershipItem();
    appContext.setEnergyItem();
    setImageSrc(img);
    setImgNum(imgNum + 1);
  };
  const buildings = [
    {
      type: "House",
      population: 5,
      price: 100,
      image: houseImage,
      level: 1,
    },
    {
      type: "Duplex",
      population: 12,
      price: 220,
      image: duplex,
      level: 1,
    },
    {
      type: "Triple story building",
      population: 20,
      price: 300,
      image: tripleBuilding,
      level: 1,
    },
  ];

  return (
    <div>
      {buildings.map((building) => {
        return (
          <div className="building-wrapper">
            <div>
              <h4 className="building-title">{building.type}</h4>
              <h5>
                Popullation:{" "}
                <span className="population success">
                  +{building.population}
                </span>
              </h5>
            </div>
            <div>
              <h3 className="price">${building.price}</h3>
              <img
                className="building"
                src={building.image}
                alt="building_img"
              />
            </div>
            <button
              className="item-add-btn"
              onClick={(e) => grabItem(e, building)}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
