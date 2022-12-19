import React from "react";
import { Icon, Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

export default function EntryLine({ description, value }) {
  return (
    <Segment color="red">
      <Grid>
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
