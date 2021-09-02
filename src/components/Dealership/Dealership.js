import React, { useState, useEffect, useContext } from "react";
import bicycle from "../../img-buildings/6159284_bicycle_bike_cycling_isometric_mountain bike_icon.svg";
import carIcon from "../../img-buildings/1988880_car_front_vehicle_icon.svg";
import truckIcon from "../../img-buildings/1988878_front_lorry_truck_vehicle_icon.svg";
import busIcon from "../../img-buildings/1988879_bus_front_public transport_vehicle_icon.svg";
import AppContext from "../../context/AppContext";

import "./dealership.css";

export default function Dealership(props) {
  const appContext = useContext(AppContext);
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, dealership) => {
    const parentElemnt = e.target.parentElement;
    const img = parentElemnt.children[1].children[1].src;
    const dealershipItem = dealership;
    console.log(dealershipItem);
    appContext.setDealershipItem(dealershipItem);
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
            <div>
              <h4 className="building-title">{Dealership.type}</h4>
              <h5>
                Pollution:{" "}
                <span className="pollution danger">+{Dealership.polution}</span>
              </h5>
            </div>
            <div>
              <h3 className="price">${Dealership.price}</h3>
              <img
                className="vehicle"
                src={Dealership.image}
                alt="building_img"
              />
            </div>
            <button
              className="item-add-btn"
              onClick={(e) => grabItem(e, Dealership)}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
