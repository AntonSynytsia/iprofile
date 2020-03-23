import React from 'react';
import PropTypes from 'prop-types';

import { Link, Container, Typography, Box, Avatar } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = props => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Link
        href="https://linkedin.com/in/anton-synytsia-5a1422170"
        target="_blank"
      >
        <LinkedInIcon style={{ fontSize: 64 }} />
      </Link>
      <Link href="https://github.com/AntonSynytsia" target="_blank">
        <GitHubIcon style={{ fontSize: 64, color: '#222' }} />
      </Link>
    </Box>
  );
};

Contact.propTypes = {};

export default Contact;
