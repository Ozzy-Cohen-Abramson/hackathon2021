import React, { useState } from "react";
import powerPlant1 from "../../img-buildings/image2vector (1).svg";
import powerPlant2 from "../../img-buildings/image2vector.svg";
import tourbine from "../../img-buildings/a5zbn-s03qv.svg";
import solar from "../../img-buildings/solar-panel-svgrepo-com.svg";

import "./energy.css";

export default function Energy(props) {
  const [imgNum, setImgNum] = useState(0);
  const [buildingObject, setBuildingObject] = useState({});
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, ener) => {
    const parentElement = e.target.parentElement;
    const img = parentElement.children[1].children[1].src;
    const energyItem = ener;
    console.log(energyItem);
    setImageSrc(img);
    setImgNum(imgNum + 1);
  };
  const energy = [
    {
      type: "Power plant",
      price: 75,
      pollution: 45,
      energy: 100,
      image: powerPlant1,
      level: 1,
    },
    {
      type: "Nueclear power plant",
      price: 325,
      pollution: 15,
      energy: 300,
      image: powerPlant2,
      level: 1,
    },
    {
      type: "Solar panel",
      price: 125,
      pollution: 1,
      energy: 75,
      image: solar,
      level: 1,
    },
    {
      type: "Wind power plant",
      price: 90,
      pollution: 0,
      energy: 40,
      image: tourbine,
      level: 1,
    },
  ];

  return (
    <div>
      {" "}
      {energy.map((ener) => {
        return (
          <div className="building-wrapper">
            <div>
              <h4 className="building-title">{ener.type}</h4>
              <h5>
                Pollution:{" "}
                <span className="pollution danger">+{ener.pollution}</span>
              </h5>
              <h5>
                Energy: <span className="energy alert">+{ener.energy}</span>
              </h5>
            </div>
            <div>
              <h3 className="price">${ener.price}</h3>
              <img
                className="power-plant"
                src={ener.image}
                alt="building_img"
              />
            </div>
            <button className="item-add-btn" onClick={(e) => grabItem(e, ener)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
