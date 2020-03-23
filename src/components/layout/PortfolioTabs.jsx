import React from 'react';
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box, Paper } from '@material-ui/core';

import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  // },
  root: {
    flexGrow: 1,
  },
}));

const PortfolioTabs = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box mt={2}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Technologies" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Technologies />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

PortfolioTabs.propTypes = {};

export default PortfolioTabs;
