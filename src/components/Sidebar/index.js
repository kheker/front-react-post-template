import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { SidebarItem, StyledSidebar, SidebarLogo, SidebarLogoContainer, SidebarLogoutItem } from './style';

import PropTypes from 'prop-types';

const SidebarLeftSlideAlong = ({ visible }) => (
  <StyledSidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
    <SidebarLogoContainer href="https://github.com/Metnew/react-semantic.ui-starter">
      <SidebarLogo src='https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?h=350&auto=compress&cs=tinysrgb' alt="logo" shape="circular" centered />
    </SidebarLogoContainer>
    <SidebarItem name='perfil'>
      <Icon name='user circle' />
      Tu Perfil
    </SidebarItem>
    <SidebarItem name='trabajos'>
      Encuentra Trabajos
    </SidebarItem>
    <SidebarItem name='frelancers'>
      Encuentra Frelancers
    </SidebarItem>
    <SidebarItem name='proyectos'>
      Crea Proyectos
    </SidebarItem>
  </StyledSidebar>
)
SidebarLeftSlideAlong.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default SidebarLeftSlideAlong
