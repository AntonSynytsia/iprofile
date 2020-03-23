import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Header from './layout/Header';
import Tabs from './layout/Tabs';

const Main = props => {
  return (
    <Container maxWidth="md">
      <Header />
      <Tabs />
    </Container>
  );
};

Main.propTypes = {};

export default Main;
