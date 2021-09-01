import React, { useEffect, useState } from "react";
import houseImage from "../../img-buildings/1988994_building_home_house_icon.svg";
import tripleBuilding from "../../img-buildings/1989010_building_icon.svg";
import duplex from "../../img-buildings/1988992_building_home_house_icon.svg";

import "./building.css";

export default function Buildings(props) {
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;
  const grabItem = (e) => {
    const parentElemnt = e.target.parentElement;
    const img = parentElemnt.children[1].children[1].src;
    setImageSrc(img);
    setImgNum(imgNum + 1);
  };
  const buildings = [
    {
      type: "House",
      population: 5,
      price: 100,
      image: houseImage,
    },
    {
      type: "Duplex",
      population: 12,
      price: 220,
      image: duplex,
    },
    {
      type: "Triple story building",
      population: 20,
      price: 300,
      image: tripleBuilding,
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
            <button className="item-add-btn" onClick={grabItem}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
