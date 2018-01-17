import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProyectItem from './ProyectItem';


const ProjectList = ({ projects }) => {
  const noProjects = (
    <Header size='huge' content='No disponibles' />
  )
  const projectList = (
    <Item.Group divided>
      {projects.map(project => <ProyectItem project={project} key={project.id} />)}
    </Item.Group>
  )
  return (
    <div>
      {projects.length === 0 ? noProjects : projectList}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
  ).isRequired
}
export default ProjectList;
