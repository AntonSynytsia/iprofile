import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Box, Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import AntonSynytsia from '../../images/avatar.jpg';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginRight: 18,
  },
  aboutText: {
    fontStyle: 'oblique',
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        alt="Anton Synytsia"
        src={AntonSynytsia}
        className={classes.avatar}
      />
      <Typography
        flexGrow={1}
        variant="body1"
        component="p"
        color="textSecondary"
        className={classes.aboutText}
      >
        An efficacious Computer Science graduate of 2019, with studies
        emphasizing simulation and game programming. Passionate in physics
        engines, robotics, aerodynamics, and full-stack development.
      </Typography>
    </Box>
  );
};

Header.propTypes = {};

export default Header;
