import "./App.css";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <DisplayBalance title="Your balance" value="2,550.53" size="small" />

      <DisplayBalances />
      <Header as="h3">History</Header>
      <EntryLine description="New expense" value=" " />
      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            placeholder="new"
            label="Description"
          />
          <Form.Input
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Add</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
