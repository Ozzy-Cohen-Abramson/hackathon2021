import React from "react";
import { Link } from "react-router-dom";
import buildMenu from "../../img-buildings/buildMenu.png";
import gameBoard from "../../img-buildings/gameBoard.png";
import sidebar from "../../img-buildings/sidebar.png";

import "./toturial.css";

export default function Toturial() {
  return (
    <div>
      <div>
        <img className="toturial-img build-menu-toturial" src={buildMenu} />
        <img className="toturial-img board-game-toturial" src={gameBoard} />
        <img className=" toturial-img sidebar-toturial" src={sidebar} />
        <h1>this is the toturial page</h1>
      </div>
      <Link to="game">
        <button>Skip toturial</button>
      </Link>
    </div>
  );
}
