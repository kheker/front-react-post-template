import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuStyled, MenuItemStyled } from './style';

const Header = ({
  onVisibleSideBar
}) => (

    <MenuStyled fixed='top' borderless={false}>
      <MenuItemStyled name='Menu' onClick={onVisibleSideBar} >
        <Icon name='content' />
        Menu
      </MenuItemStyled>
      <MenuItemStyled as={NavLink} to='/' name='PIXELANCE' />
    </MenuStyled>
  )

Header.propTypes = {
  onVisibleSideBar: PropTypes.func.isRequired
}

export default Header;
