import React from "react";
import { Item, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  const noProjects = <Header size="huge" content="No disponibles" />;
  const projectList = (
    <Item.Group divided>
      {projects.map(project => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </Item.Group>
  );
  return <div>{projects.length === 0 ? noProjects : projectList}</div>;
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
export default ProjectList;
