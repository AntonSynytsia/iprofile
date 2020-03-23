import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

const Project = ({ name, description, learnMoreUrl, demoUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos}>
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {learnMoreUrl && (
          <Button
            size="small"
            href={learnMoreUrl}
            target="_blank"
            color="default"
          >
            Learn More
          </Button>
        )}
        {demoUrl && (
          <Button size="small" href={demoUrl} target="_blank" color="primary">
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

Project.propTypes = {};

export default Project;
