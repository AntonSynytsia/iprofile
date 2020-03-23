import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Technologies = props => {
  return (
    <div>
      <List component="nav">
        <ListItem>
          <ListItemText primary="React with Redux" />
        </ListItem>
        <ListItem>
          <ListItemText primary="AngularJs" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Bootstrap 4" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material UI" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="NodeJs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Express" />
        </ListItem>
        <ListItem>
          <ListItemText primary="MySQL and Sequelize" />
        </ListItem>
        <ListItem>
          <ListItemText primary="MongoDB and Mongoose" />
        </ListItem>
        <ListItem>
          <ListItemText primary="JSON Web Tokens" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="React Native" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="JavaScript (ES7)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="CSS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="HTML" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="C++" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ruby" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Python" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Windows API" />
        </ListItem>
        <ListItem>
          <ListItemText primary="SketchUp API" />
        </ListItem>
      </List>
    </div>
  );
};

Technologies.propTypes = {};

export default Technologies;
