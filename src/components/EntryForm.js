import React, { Fragment } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setValue,
  setDescription,
  setExpense,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          placeholder="Enter new expense"
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
