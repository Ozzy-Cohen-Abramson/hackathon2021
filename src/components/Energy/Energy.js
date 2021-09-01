import React, { useState } from "react";
import powerPlant1 from "../../img-buildings/image2vector (1).svg";
import powerPlant2 from "../../img-buildings/image2vector.svg";
import tourbine from "../../img-buildings/a5zbn-s03qv.svg";

import "./energy.css";

export default function Energy(props) {
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;
  const grabItem = (e) => {
    const parentElemnt = e.target.parentElement;
    const img = parentElemnt.children[1].children[1].src;
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
    },
    {
      type: "Nueclear power plant",
      price: 325,
      pollution: 15,
      energy: 300,
      image: powerPlant2,
    },
    {
      type: "Wind power plant",
      price: 90,
      pollution: 0,
      energy: 40,
      image: tourbine,
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
            <button className="item-add-btn" onClick={grabItem}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
