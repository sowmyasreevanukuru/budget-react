import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { DisplayBalance } from "./DisplayBalance";

export function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="12578.62" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value="1888.62" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
