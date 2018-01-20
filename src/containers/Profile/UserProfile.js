import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Header,
  Flag,
  Segment,
  Card,
  Image,
  Rating,
  Label,
  Statistic,
  Icon,
  Tab
} from "semantic-ui-react";

const UserProfile = ({ profile }) => {
  const panes = [
    {
      menuItem: "Portafolio",
      render: () => (
        <Tab.Pane attached={false} key="asd12">
          <Card.Group size="medium" itemsPerRow={3}>
            {profile.portfolio &&
              profile.portfolio.map(p => <Card image={p} key={p} raised />)}
          </Card.Group>
        </Tab.Pane>
      )
    }
  ];
  return (
    <Container>
      <Segment>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card>
                <Image src={profile.avatar} size="large" />
                <Card.Content textAlign="center">
                  <Card.Header>
                    {profile.name} <Flag name={profile.country} />
                  </Card.Header>
                  <Card.Meta>{profile.profession}</Card.Meta>
                  <Statistic horizontal>
                    <Icon name="dollar" size="big" />
                    <Statistic.Value>{profile.pricePerHour}</Statistic.Value>
                    <Statistic.Label>/hr</Statistic.Label>
                  </Statistic>
                </Card.Content>
                <Card.Content description="Ace of most trades, jack of some... First and foremost I am a writer, I am a multi-published NCTJ qualified journalist and travel writer with additional skills in SEO, Radio" />
                <Card.Content textAlign="center">
                  <Statistic>
                    <Statistic.Value>{profile.finishJobs}</Statistic.Value>
                    <Statistic.Label>Trabajos completados</Statistic.Label>
                  </Statistic>
                  <Rating
                    icon="star"
                    rating={profile.rating}
                    maxRating={5}
                    disabled
                  />
                </Card.Content>
                <Card.Content>
                  <Label.Group tag>
                    <Header content="Habilidades" />
                    {profile.skills &&
                      profile.skills.map(skill => (
                        <Label content={skill} key={skill} color="blue" />
                      ))}
                  </Label.Group>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={12}>
              <Tab
                menu={{ secondary: true, pointing: true, widths: 2 }}
                panes={panes}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};
UserProfile.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    country: PropTypes.string,
    profession: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    pricePerHour: PropTypes.number,
    finishJobs: PropTypes.number,
    portfolio: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
export default UserProfile;
