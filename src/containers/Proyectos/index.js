import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Segment, List } from 'semantic-ui-react';
import { fetchProjects } from '../../actions/projects';
import ProyectList from './ProyectList';
import SimpleSearchBar from './SimpleSearchBar';

export class PojectsPage extends Component {
  static propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
    }).isRequired
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.any]).isRequired
  }

  state = {
    filterText: ''
  }
  componentDidMount = () => {
    this.props.fetchProjects();
  }


  render() {
    return (
      <Grid container stackable>
        <Grid.Row>
          <Header size='huge' content='Proyectos' />
          <Grid.Column width={16}>
            <SimpleSearchBar searchFilter={this.state.filterText} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header size='large' content='Categorias' />
            <Segment raised>
              <List divided relaxed selection>
                <List.Item >
                  <List.Icon name='desktop' />
                  <List.Content>IT/PROGRAMACIÓN</List.Content>
                </List.Item>
                <List.Item >
                  <List.Icon name='tablet' />
                  <List.Content>DISEÑO & MULTIMEDIA</List.Content>
                </List.Item>
                <List.Item >
                  <List.Icon name='line chart' />
                  <List.Content>MARKETING & VENTAS</List.Content>
                </List.Item>
                <List.Item >
                  <List.Icon name='file' />
                  <List.Content>TRADUCCIÓN Y REDACCIÓN</List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={11} floated='right'>
            <Header size='large' content='Lista de proyectos' />
            <Segment loading={this.props.isLoading}>
              <ProyectList projects={this.props.projects} error={this.props.error} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  const { error, projects, isLoading } = state.projects;
  return {
    projects,
    isLoading,
    error
  }
}

export default withRouter(connect(mapStateToProps, { fetchProjects })(PojectsPage));

