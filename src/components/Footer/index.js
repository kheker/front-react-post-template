import React from 'react'
import { Grid, List, Header, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical style={{ padding: '5em 0em', backgroundColor: '#3f51b5' }}>
    <Grid container divided stackable>
      <Grid.Row>
        <Grid.Column width={4}>
          <Header content='Acerca de' inverted />
          <List link inverted>
            <List.Item as='a' content='Acerca de nosotros' />
            <List.Item as='a' content='Como funciona' />
            <List.Item as='a' content='Mapa del sitio' />
            <List.Item as='a' content='Seguridad' />
          </List>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header content='Servicios' inverted />
          <List link inverted>
            <List.Item as='a'>
              Trabajos
            </List.Item>
            <List.Item as='a'>
              Freelancers
            </List.Item>
            <List.Item as='a'>
              Crear Proyecto
            </List.Item>
            <List.Item as='a'>
              Plan de beneficios
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header content='Terminos' inverted />
          <List link inverted>
            <List.Item as='a' >
              Telefono
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment >
)
export default Footer;
