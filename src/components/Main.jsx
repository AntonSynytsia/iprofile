import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import PortfolioHeader from './layout/PortfolioHeader';
import PortfolioTabs from './layout/PortfolioTabs';

const Main = props => {
  return (
    <Container maxWidth="md">
      <PortfolioHeader />
      <PortfolioTabs />
    </Container>
  );
};

Main.propTypes = {};

export default Main;
