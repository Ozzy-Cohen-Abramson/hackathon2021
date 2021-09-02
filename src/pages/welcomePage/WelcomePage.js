import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./welcomePage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function WelcomePage() {
  const appContext = useContext(AppContext);

  // useEffect(() => {
  //   console.log(appContext.cityName);
  // }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  return (
    <>
      <div className="welcome-page-form">
        <form className="city-name-input">
          <label className="city-label">Add city & player name</label>
          <TextField
            onChange={(e) => appContext.setUserName(e.target.value)}
            id="standard-basic"
            className="user-name"
            label="Player name"
          />
          <TextField
            onChange={(e) => appContext.setCityName(e.target.value)}
            id="standard-basic"
            className="city-name"
            label="City Name"
          />

          <Link to="game">
            <button class="custom-btn btn-3">
              <span> Start game!</span>
            </button>{" "}
          </Link>
        </form>
      </div>
    </>
  );
}
