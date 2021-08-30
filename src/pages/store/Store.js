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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Store() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} store-wrapper`}>
      <Tabs
        orientation='vertical'
        indicatorColor='light'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={`${classes.tabs} tabs`}>
        <Tab
          label={<AtmIcon fontSize='large' />}
          className='store-item-one tab'
          {...a11yProps(0)}
        />
        <Tab
          label={<DetailsIcon fontSize='large' />}
          className='store-item-two tab'
          {...a11yProps(1)}
        />
        <Tab
          label={<AddBoxIcon fontSize='large' />}
          className='store-item-three tab'
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0} className='store-item store-item-one'>
        Credits
      </TabPanel>
      <TabPanel value={value} index={1} className='store-item store-item-two'>
        Diamods
      </TabPanel>
      <TabPanel value={value} index={2} className='store-item store-item-three'>
        Surprise Boxes
      </TabPanel>
    </div>
  );
}
