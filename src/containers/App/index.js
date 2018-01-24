import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Projectos from "../Projects";
import DetallePrueba from "../Projects/ProjectDetail";
import Users from "../Users";
import Profile from "../Profile";

import {
  SidebarSemanticPushableStyled,
  SidebarSemanticPusherStyled,
  PageLayout,
  MainLayout,
  MainContent,
  MainContainer
} from "./style";
import SidebarLeftSlideAlong from "../../components/Sidebar";

class App extends Component {
  state = {
    visible: false
  };

  onVisibleSideBar = () => {
    this.setState({ visible: !this.state.visible });
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <PageLayout>
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div{
              height:100%;
            }
            `}
        </style>
        <SidebarSemanticPushableStyled>
          <SidebarLeftSlideAlong visible={visible} />
          <Header onVisibleSideBar={this.onVisibleSideBar} />
          <SidebarSemanticPusherStyled onClick={this.handlePusher}>
            <MainLayout>
              <MainContent>
                <MainContainer fluid>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/usuarios" component={Users} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/registrar" component={Register} />
                    <Route exact path="/proyectos" component={Projectos} />
                    <Route
                      exact
                      path="/proyectos/:id"
                      component={DetallePrueba}
                    />
                  </Switch>
                </MainContainer>
              </MainContent>
            </MainLayout>
            <Footer />
          </SidebarSemanticPusherStyled>
        </SidebarSemanticPushableStyled>
      </PageLayout>
    );
  }
}

export default App;
