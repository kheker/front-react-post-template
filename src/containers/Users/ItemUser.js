import React from "react";
import { Item, Rating, Label, Flag } from "semantic-ui-react";

const ItemUser = ({ user }) => (
  <Item>
    <Item.Image size="small" src={user.avatar} />
    <Item.Content verticalAlign="middle">
      <Item.Header as="a">{user.name}</Item.Header> <Flag name={user.country} />
      <Item.Meta>{user.profession}</Item.Meta>
      <Item.Description>
        <Rating
          icon="star"
          defaultRating={user.rating}
          maxRating={5}
          disabled
        />
      </Item.Description>
      <Item.Extra>
        <Label.Group tag>
          {user.skills.map(skill => (
            <Label content={skill} key={skill} color="blue" />
          ))}
        </Label.Group>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default ItemUser;
