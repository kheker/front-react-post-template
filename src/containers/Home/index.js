import React from 'react';
import { Grid, Header } from 'semantic-ui-react';


const Home = () => (
  <Grid columns={1}>
    <Grid.Row centered>
      <Grid.Column width={16}>
        <Header as="h1">
          Hola mundo 1
        </Header>
        <Header as="h2">
          Hola mundo 2
        </Header>
        <p>
          Hola mundo 3
        </p>
        <Header as="h2">
          Hola mundo 4
        </Header>
        <p>
          Hola mundo 5
        </p>
        <Header as="h1">
          Hola mundo 6
        </Header>
        <Header as="h2">
          Hola mundo 7
        </Header>
        <p>
          Hola mundo 8
        </p>
        <Header as="h2">
          Hola mundo 9
        </Header>
        <p>
          Hola mundo 0
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Home;
