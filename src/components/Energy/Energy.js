import React, { useContext, useState } from "react";
import powerPlant1 from "../../img-buildings/image2vector (1).svg";
import powerPlant2 from "../../img-buildings/image2vector.svg";
import tourbine from "../../img-buildings/a5zbn-s03qv.svg";
import solar from "../../img-buildings/solar-panel-svgrepo-com.svg";
import info from "../../img-buildings/728979_info_communication_data_help_information_icon.svg";
import coins from "../../img-buildings/4075929_coins_money_points_stack_icon.svg";
import AppContext from "../../context/AppContext";

import "./energy.css";

export default function Energy(props) {
  const appContext = useContext(AppContext);
  const [imgNum, setImgNum] = useState(0);
  const [buildingObject, setBuildingObject] = useState({});
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, ener) => {
    const parentElement = e.target.parentElement;
    const img = ener.image;
    const energyItem = ener;
    console.log(energyItem.image);
    appContext.setEnergyItem(energyItem);
    appContext.setBuildingItem();
    appContext.setDealershipItem();
    setImageSrc(img);
    setImgNum(imgNum + 1);
  };
  const energy = [
    {
      type: "Power plant",
      price: 75,
      pollution: 150,
      status: "Very bad",

      energy: 100,
      image: powerPlant1,
      level: 1,
    },
    {
      type: "Nueclear power plant",
      price: 325,
      pollution: 30,
      status: "Better",
      energy: 300,
      image: powerPlant2,
      level: 1,
    },
    {
      type: "Solar panel",
      price: 125,
      pollution: 0,
      status: "Good",
      energy: 75,
      image: solar,
      level: 1,
    },
    {
      type: "Wind power plant",
      price: 90,
      pollution: 0,
      status: "Good",
      energy: 40,
      image: tourbine,
      level: 1,
    },
  ];

  return (
    <div className="cards-container">
      {" "}
      {energy.map((ener) => {
        return (
          <div className="building-wrapper">
            <div className="card-text-energy">
              <h4 className="building-title">{ener.type}</h4>
              <div className="price-wrapper">
                <h3 className="price">{ener.price}</h3>
                <img className="coins" src={coins} />{" "}
              </div>
              <h5>
                Energy: <span className="energy alert">+{ener.energy}</span>
              </h5>
              <h5>
                Is it good?{" "}
                <span
                  className={
                    ener.status !== "Good" ? "pollution danger" : "green danger"
                  }
                >
                  {ener.status}
                </span>
              </h5>
            </div>
            <div>
              <img
                className="power-plant"
                src={ener.image}
                alt="building_img"
              />
            </div>
            <div className="right-side-card">
              <img className="info-icon" src={info} alt="info_img" />{" "}
              <button
                className="item-add-btn"
                onClick={(e) => grabItem(e, ener)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
