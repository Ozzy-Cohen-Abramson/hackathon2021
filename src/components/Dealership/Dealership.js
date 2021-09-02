import React, { useState, useEffect, useContext } from "react";
import bicycle from "../../img-buildings/a5sqg-2dlfu.svg";
import carIcon from "../../img-buildings/a1run-6kxdd.svg";
import truckIcon from "../../img-buildings/adpd9-sc9v4.svg";
import busIcon from "../../img-buildings/a4gqp-zg5j6.svg";
import info from "../../img-buildings/728979_info_communication_data_help_information_icon.svg";
import AppContext from "../../context/AppContext";

import "./dealership.css";

export default function Dealership(props) {
  const appContext = useContext(AppContext);
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, dealership) => {
    const parentElement = e.target.parentElement;
    const img = parentElement.parentElement.children[1].children[1].src;
    const dealershipItem = dealership;
    console.log(dealershipItem);
    appContext.setDealershipItem(dealershipItem);
    appContext.setBuildingItem();
    setImageSrc(img);
    setImgNum(imgNum + 1);
  };

  const Dealerships = [
    {
      type: "Bicycle dealership",
      polution: 0,
      price: 50,
      image: bicycle,
    },
    {
      type: "ICE car dealership",
      polution: 15,
      price: 150,
      image: carIcon,
    },
    {
      type: "Truck shop",
      polution: 35,
      price: 250,
      image: truckIcon,
    },
    {
      type: "Buss shop",
      polution: 30,
      price: 200,
      image: busIcon,
    },
  ];

  return (
    <div>
      {" "}
      {Dealerships.map((Dealership) => {
        return (
          <div className="building-wrapper">
            <div className="card-text">
              <div>
                <h4 className="building-title">{Dealership.type}</h4>
                <h5>
                  Pollution:{" "}
                  <span className="pollution danger">
                    +{Dealership.polution}
                  </span>
                </h5>
              </div>
            </div>
            <div>
              <h3 className="price">${Dealership.price}</h3>
              <img
                className="vehicle"
                src={Dealership.image}
                alt="building_img"
              />
            </div>

            <div className="right-side-card">
              <img className="info-icon" src={info} alt="info_img" />{" "}
              <button
                className="item-add-btn"
                onClick={(e) => grabItem(e, Dealership)}
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
