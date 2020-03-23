import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, Box, Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import MyAvatar from '../../images/avatar.jpg';

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

const PortfolioHeader = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        my={1}
      >
        <Avatar
          alt="Anton Synytsia"
          src={MyAvatar}
          className={classes.avatar}
        />
        <Typography
          flexGrow={1}
          variant="body1"
          component="p"
          color="textSecondary"
          className={classes.aboutText}
        >
          Greetings! I am Anton Synytsia, a Computer Science graduate of 2019. I
          am passionate about physics engines, robotics, aerodynamics, and
          full-stack development.
        </Typography>
      </Box>
    </Container>
  );
};

PortfolioHeader.propTypes = {};

export default PortfolioHeader;
