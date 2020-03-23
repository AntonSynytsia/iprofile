import React from 'react';
import PropTypes from 'prop-types';

import Project from '../abstract/Project';
import projectList from '../../data/projects';

const Projects = props => {
  return (
    <div>
      {projectList.map(
        ({ name, description, learnMoreUrl, demoUrl }, index) => {
          console.log(index);
          return (
            <Project
              key={'pr' + index.toString()}
              name={name}
              description={description}
              learnMoreUrl={learnMoreUrl}
              demoUrl={demoUrl}
            />
          );
        }
      )}
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
