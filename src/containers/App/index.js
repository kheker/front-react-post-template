import React, { Component } from 'react';
import Header from '../../components/Header';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import {
  SidebarSemanticPushableStyled,
  SidebarSemanticPusherStyled,
  PageLayout,
  MainLayout,
  MainContent,
  MainContainer
} from './style';
import SidebarLeftSlideAlong from '../../components/Sidebar';

class App extends Component {
  state = {
    visible: false
  }

  onVisibleSideBar = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const { visible } = this.state;
    return (
      <PageLayout>
        <SidebarSemanticPushableStyled>
          <SidebarLeftSlideAlong visible={visible} />
          <SidebarSemanticPusherStyled>
            <Header onVisibleSideBar={this.onVisibleSideBar} />
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registrar' component={Register} />
            <MainLayout>
              <MainContent>
                <MainContainer >
                  dlakjs dkajw dl
                </MainContainer>
              </MainContent>
            </MainLayout>
          </SidebarSemanticPusherStyled>
        </SidebarSemanticPushableStyled>
      </PageLayout>
    )
  }
}


export default App;
