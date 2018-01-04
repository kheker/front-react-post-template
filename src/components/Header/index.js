import React, { Component } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuStyled, MenuItemStyled } from './style';

class MenuExampleSizeTiny extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { onVisibleSideBar } = this.props
    return (
      <MenuStyled fixed='top' borderless={false}>
        <MenuItemStyled name='Menu' onClick={onVisibleSideBar} >
          <Icon name='content' />
          Menu
        </MenuItemStyled>
        <MenuItemStyled as={NavLink} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>

          <MenuItemStyled>
            <Button secondary>Sign In</Button>
          </MenuItemStyled>
          <MenuItemStyled>
            <Button primary>Sign Up</Button>
          </MenuItemStyled>
        </Menu.Menu>
      </MenuStyled>
    )
  }
}

MenuExampleSizeTiny.propTypes = {
  onVisibleSideBar: PropTypes.func.isRequired
}

export default MenuExampleSizeTiny;
