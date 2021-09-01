import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AtmIcon from "@material-ui/icons/Atm";
import DetailsIcon from "@material-ui/icons/Details";
import AddBoxIcon from "@material-ui/icons/AddBox";

import "./store.css";

export default function Store() {

  return (
    <>
      <div class="perspective">

  {/* <label class="tab" for="tab-top">TOP</label>
  <label class="tab" for="tab-front">FRONT</label>
  <label class="tab" for="tab-bottom">BOTTOM</label>
  <input type="radio" name="tabs" id="tab-top">
  <input type="radio" name="tabs" id="tab-front">
  <input type="radio" name="tabs" id="tab-bottom">  */}

  <div class="cube">
    <div class="tab-content">
      <h1>TOP CONTENT</h1>
      <p>THIS IS AWESOME</p>
    </div>
     <div class="tab-content">
      <h1>FRONT CONTENT</h1>
      <p>THIS IS COOL</p>
    </div>
    <div class="tab-content">
      <h1>BOTTOM CONTENT</h1>
      <p>THIS IS SWEET</p>
    </div>
  </div>
</div>
    </>
  );
}
