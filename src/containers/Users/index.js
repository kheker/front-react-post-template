import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Segment, Header, Message, Item } from 'semantic-ui-react';
import { fetchUsers } from '../../actions/users';
import ItemUser from './ItemUser';

class UsersList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: arrayOf(PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      country: PropTypes.string,
      profession: PropTypes.string,
      skills: arrayOf(PropTypes.string),
      pricePerHour: PropTypes.number,
      finishJobs: PropTypes.number
    }).isRequired).isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.any]).isRequired
  }

  componentDidMount = () => {
    this.props.fetchUsers()
  }

  render() {
    const { users, isLoading, error } = this.props;
    return (
      <Grid container stackable>
        <Header as='h1' content='Usuarios encontrados' />
        <Grid.Row>
          <Grid.Column>
            <Segment>
              Buscador
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment>
              Filtros de busqueda
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            {Object.keys(error).length ? <Message negative content='Algo va mal intentalo de nuevo o mas tarde' /> : <Segment loading={isLoading}>
              {users.length === 0 ?
                <Message success content='No hay usuarios diponibles' /> : (<Item.Group>{users.map(user => <ItemUser key={user.id} user={user} />)}</Item.Group>)}
            </Segment>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const { users, isLoading, error } = state.users;
  return {
    users,
    isLoading,
    error
  }
}

export default withRouter(connect(mapStateToProps, { fetchUsers })(UsersList))
