import React, { Fragment } from "react";
import { Icon, Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
export default function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  editEntry,
}) {
  //console.log(value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {`$ ${value}`}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => editEntry(id)}
                style={{ cursor: "pointer" }}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
                style={{ cursor: "pointer" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}
