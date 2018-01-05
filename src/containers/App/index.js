import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
          <Header onVisibleSideBar={this.onVisibleSideBar} />
          <SidebarSemanticPusherStyled>
            <MainLayout>
              <MainContent>
                <MainContainer fluid>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/registrar' component={Register} />
                  </Switch>
                </MainContainer>
              </MainContent>
            </MainLayout>
          </SidebarSemanticPusherStyled>
        </SidebarSemanticPushableStyled>
        <Footer />
      </PageLayout>
    )
  }
}


export default App;
