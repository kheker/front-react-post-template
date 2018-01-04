import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { SidebarItem, StyledSidebar, SidebarLogo, SidebarLogoContainer, SidebarLogoutItem, Spacer } from './style';


const SidebarLeftSlideAlong = ({ visible }) => (
  <StyledSidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted >
    <SidebarLogoContainer href="https://github.com/Metnew/react-semantic.ui-starter">
      <SidebarLogo src='https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?h=350&auto=compress&cs=tinysrgb' alt="logo" shape="circular" centered />
    </SidebarLogoContainer>
    <SidebarItem name='perfil'>
      <Icon name='user circle' />
      Tu Perfil
    </SidebarItem>
    <SidebarItem as={NavLink} to='/registrar' name='register'>
      Unete/Registrate
    </SidebarItem>
    <SidebarItem as={NavLink} to='/login' name='login'>
      Entrar
    </SidebarItem>
    <SidebarItem as={NavLink} to='/trabajos' name='trabajos'>
      Encuentra Trabajos
    </SidebarItem>
    <SidebarItem as={NavLink} to='/freelancers' name='frelancers'>
      Encuentra Frelancers
    </SidebarItem>
    <SidebarItem as={NavLink} to='/proyectos' name='proyectos'>
      Crea Proyectos
    </SidebarItem>
    <Spacer />
    <SidebarLogoutItem name='logout'>
      <Icon name='power' />
      Cerrar Sesión
    </SidebarLogoutItem>
  </StyledSidebar>
)
SidebarLeftSlideAlong.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default SidebarLeftSlideAlong
