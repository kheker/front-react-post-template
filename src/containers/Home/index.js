import React from 'react';
import { Grid, Icon, Segment, Header, Image, Card } from 'semantic-ui-react';
import hero from './hero.jpeg';
import { HeroContainer, HeroTexContainer, SectionHeadersContainer, HeaderStyled, SubHeaderStyled, HeaderCategory } from './style';
import img1 from './img1.jpeg';
import ctg1 from './ctg1.jpeg';
import ctg2 from './ctg2.jpg';
import ctg3 from './ctg3.jpeg';
import ctg4 from './ctg4.png';

const Home = () => (
  <div>
    <Grid columns={1}>
      <HeroContainer img={hero}>
        <HeroTexContainer>
          Pixelance
      </HeroTexContainer>
      </HeroContainer>
      <SectionHeadersContainer attached='bottom' padded inverted>
        <Grid columns={3} divided centered stackable>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <HeaderStyled icon>
                <Icon name='browser' />
                Explora
              <SubHeaderStyled>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </SubHeaderStyled>
              </HeaderStyled>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <HeaderStyled icon>
                <Icon name='star' />
                Contrata
              <SubHeaderStyled>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </SubHeaderStyled>
              </HeaderStyled>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <HeaderStyled icon>
                <Icon name='idea' />
                Crea Proyectos
              <SubHeaderStyled>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </SubHeaderStyled>
              </HeaderStyled>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SectionHeadersContainer>
    </Grid>
    <Segment vertical style={{ padding: '6em 0em' }}>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Como Funciona Pixelance
            <Header.Subheader style={{ fontSize: '1.2rem', marginTop: '12px' }}>
                We can give your company superpowers to do things that they never thought possible. Let us delight
                your customers and empower your needs... through pure data analytics.
            </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded src={img1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical style={{ padding: '6em 0em' }}>
      <Grid container stackable columns={4} textAlign='center'>
        <Header as='h2' content='Categorias' textAlign='center' style={{ fontSize: '3em', marginBottom: '2em', fontWeight: '300' }} />
        <Grid.Row>
          <Grid.Column>
            <Image centered href='#' src={ctg1} />
            <HeaderCategory >
              IT & PROGRAMACIÓN
              <Header.Subheader>Mas de 1400 proyectos</Header.Subheader>
            </HeaderCategory>
          </Grid.Column>
          <Grid.Column>
            <Image centered href='#' src={ctg2} />
            <HeaderCategory >
              DISEÑO & MULTIMEDIA
              <Header.Subheader>Mas de 900 proyectos</Header.Subheader>
            </HeaderCategory>
          </Grid.Column>
          <Grid.Column>
            <Image centered href='#' src={ctg3} />
            <HeaderCategory >
              MARKETING & VENTAS
              <Header.Subheader>Mas de 500 proyectos</Header.Subheader>
            </HeaderCategory>
          </Grid.Column>
          <Grid.Column>
            <Image centered href='#' src={ctg4} />
            <HeaderCategory >
              TRADUCCIÓN Y REDACCIÓN
              <Header.Subheader>Mas de 350 proyectos</Header.Subheader>
            </HeaderCategory>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical style={{ padding: '6em 0em' }}>
      <Grid container stackable columns={4} textAlign='center'>
        <Header as='h2' content='Plan de Beneficios' textAlign='center' style={{ fontSize: '3em', marginBottom: '2em', fontWeight: '300' }} />
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Plan Gratis
                </Card.Header>
              </Card.Content>
              <Card.Content>
                Descuento de 23%
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Plan Gold
                </Card.Header>
              </Card.Content>
              <Card.Content>
                Descuento de 15%
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>
                  Plan Platinum
                </Card.Header>
              </Card.Content>
              <Card.Content>
                Descuento de 8%
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
)

export default Home;
