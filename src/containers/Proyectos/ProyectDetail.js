import React from 'react';
import {
  Grid,
  Header,
  Segment,
  Container,
  Button,
  Divider,
  Image,
  Rating,
  Flag,
  Icon
} from 'semantic-ui-react';

import styled from 'styled-components';

const DescriptionText = styled.div`
  color: #666 !important;
  font-size: 1.1em;
  line-height: 1.6em;
`;
const TitleDescription = styled.div`
  color: #666 !important;
  font-size: 1.6em;
  margin-top: 15px;
`;
const ProjectDetail = () => (
  <Container>
    <Header size='huge'>
      <Header.Content content='Titulo del proyecto' />
    </Header>
    <Segment>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as='h2'>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png'
                circular
              />
              <Header.Content>
                Kevin
                <Header.Subheader>
                  <Rating icon='star' defaultRating={3} maxRating={5} disabled />
                  <p>
                    <Flag name='us' /> USA
                  </p>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' textAlign='center'>
              Métodos de pago
              <Header.Subheader style={{ marginTop: '15px' }}>
                <Icon size='large' name='paypal' />
                <Icon size='large' name='visa' />
                <Icon size='large' name='mastercard' />
                <Icon size='large' name='stripe' />
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' textAlign='center'>
              Proyectos realizados
              <div style={{
                color: '#666',
                fontSize: '1.6em',
                marginTop: '15px'
              }}>
                4
              </div>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button fluid color='blue'>Envia una propuesta</Button>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={12}>
            <DescriptionText>
              Necesitamos programador, para diversos portales web grandes, tipo www.telefono.es / www.anuncio.es
            Los portales están desarrollados en PHP y necesitamos actualizarlos. Además de importantes desarrollos a nivel nacional, sobre dominios genericos.

            El perfil que busco, es una persona con grandes conocimientos en PHP, CSS, HTML5, servidores, control de bases de datos, etc... que pueda realizar de cero cualquier desarrollo de este tipo, para llevarlo a buen fin, y sobre todo terminarlo perfecto para dejarlo a trabajar de forma independiente.

            Debe ser desarrolador PHP, analista y programador en grandes portales web, con diversas variables a tener en cuenta, con capacidad de dar respuesta y soluciones hasta completar al 100% los desarrollos. Independencia y capacidad resolutiva para cualquier incidencia en los desarrollos. Conocimientos altos de SEO, para desarrollar los portales orientados al SEO. Conocimientos básicos de Android / IOs para coordinar portales/Apps
            </DescriptionText>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>
              Hola mundo
              <Header.Subheader>
                El perfil que busco, es una persona con grandes conocimientos en PHP, CSS, HTML5, servidores, control de bases de datos, etc...
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
)

export default ProjectDetail;
