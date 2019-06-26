import React from "react";
import { Card, CardText, CardDeck, CardBody, CardHeader } from "reactstrap";

import NewDuels from "../fonctions/dernierduels.fonction.deck";

const cardDecks = props => {
  return (
    <CardDeck>
      <Card>
        <CardHeader>
          <h3>Dernier Duels.</h3>
        </CardHeader>
        <CardBody>
          <CardText>
            <NewDuels />
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h3>Classement / Campus.</h3>
        </CardHeader>
        <CardBody>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default cardDecks;
