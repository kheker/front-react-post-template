import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class MenuExampleSizeTiny extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { onVisibleSideBar } = this.props
    return (
      <Menu >
        <Menu.Item name='Menu' onClick={onVisibleSideBar} >
          <Icon name='content' />
          Menu
        </Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>

          <Menu.Item>
            <Button secondary>Sign In</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

MenuExampleSizeTiny.propTypes = {
  onVisibleSideBar: PropTypes.func.isRequired
}

export default MenuExampleSizeTiny;
