import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./welcomePage.css";

export default function WelcomePage() {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log(appContext.cityName);
  }, []);

  return (
    <>
      <div className="welcome-page-form">
        <form>
          <label>Set city name!</label>
          <input
            placeholder="City Name"
            onChange={(e) => appContext.setCityName(e.target.value)}
          ></input>
          <Link to="game">
            <button>Go to game!</button>
          </Link>
        </form>
      </div>
    </>
  );
}
