import React from "react";
import { Card, CardDeck, CardBody, CardHeader } from "reactstrap";

import NewDuels from "./dernierduels";
import NewClassement from "./classement";

const cardDecks = props => {
  return (
    <CardDeck>
      <Card>
        <CardHeader>
          <h3>Dernier Duels</h3>
        </CardHeader>
        <CardBody>
          <NewDuels />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h3>Classement / Campus</h3>
        </CardHeader>
        <CardBody>
          <NewClassement />
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default cardDecks;
