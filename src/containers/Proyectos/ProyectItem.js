import React from 'react';
import styled from 'styled-components';
import { Item, Label, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ItemHeaderStyled = styled(Item.Header) `
font-size: 1.7em !important;
font-weight: 300 !important;
`;

const ItemDescriptionStyled = styled(Item.Description) `
font-size: 1.14em !important;
`;

const ProyectItem = ({ project }) => (
  <Item>
    <Item.Content>
      <ItemHeaderStyled as='a' content={project.title} />
      <Item.Meta content='hace 12 horas' />
      <ItemDescriptionStyled content={project.description} />
      <Item.Extra>
        {project.skills.map((skill) => (
          <Label content={skill} color='blue' key={skill} />
        ))}
      </Item.Extra>
      <Item.Extra>
        <Image avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ2yyZICBI_pcqc_KxT55FYvlpE8TtOKTlVuNuVyjbr1BSwLhw" />
        <span>{project.user.name}</span>
      </Item.Extra>
    </Item.Content>
  </Item>
)

ProyectItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired
}
export default ProyectItem;
