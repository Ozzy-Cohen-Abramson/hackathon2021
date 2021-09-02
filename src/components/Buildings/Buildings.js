import React, { useContext, useEffect, useState } from "react";
import houseImage from "../../img-buildings/1988994_building_home_house_icon.svg";
import tripleBuilding from "../../img-buildings/1989010_building_icon.svg";
import duplex from "../../img-buildings/1988992_building_home_house_icon.svg";
import skyscrapper from "../../img-buildings/1989011_building_skyscraper_icon.svg";
import info from "../../img-buildings/728979_info_communication_data_help_information_icon.svg";

import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import AppContext from "../../context/AppContext";

import "./building.css";

export default function Buildings(props) {
  const appContext = useContext(AppContext);
  const [imgNum, setImgNum] = useState(0);
  const { imageSrc, setImageSrc } = props;

  const grabItem = (e, building) => {
    const parentElement = e.target.parentElement;
    const img = parentElement.parentElement.children[1].children[1].src;
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
      exp: "There no place like home",
    },
    {
      type: "Duplex",
      population: 12,
      price: 220,
      image: duplex,
      level: 1,
      exp: "Better to live together...you never know when you'll need milk",
    },
    {
      type: "Triple story building",
      population: 20,
      price: 300,
      image: tripleBuilding,
      level: 1,
      exp: "Need people in your city? this guy will get you some",
    },
    {
      type: "Skyscrapper",
      population: 35,
      price: 500,
      image: skyscrapper,
      level: 1,
    },
  ];

  const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {buildings.map((building) => {
        return (
          <div className="building-wrapper">
            <div className="card-text">
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
            <div className="right-side-card">
              <img
                className="info-icon"
                src={info}
                alt="info_img"
                onClick={handleClick}
              />{" "}
              <button
                className="item-add-btn"
                onClick={(e) => grabItem(e, building)}
              >
                Add
              </button>
            </div>
            {/* <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                {building.exp}
              </Typography>
            </Popover> */}
          </div>
        );
      })}
    </div>
  );
}
