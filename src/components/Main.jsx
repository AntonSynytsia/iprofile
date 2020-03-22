import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Header from './layout/Header';
import Tabs from './layout/Tabs';

const Main = props => {
  return (
    <Fragment>
      <Container>
        <Header />
        <Tabs />
      </Container>
    </Fragment>
  );
};

Main.propTypes = {};

export default Main;
