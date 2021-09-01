import React, { useState } from "react";
import "./gameMap.css";
import CityMap from "../../components/cityMap/CityMap";
import FullWidthTabs from "../../components/BuildMenu/BuildMenu";
import SideMenu from "../../components/sideMenu/SideMenu.js";

export default function GameMap() {
  const [imageSrc, setImageSrc] = useState("");

  return (
    <>
      <div className="board-game-wrapper">
        <FullWidthTabs imageSrc={imageSrc} setImageSrc={setImageSrc} />
        <CityMap imageSrc={imageSrc} setImageSrc={setImageSrc} />
      <SideMenu />
      </div>
    </>
  );
}
