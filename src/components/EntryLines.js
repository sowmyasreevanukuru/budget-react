import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";

export default function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} />
      ))}
    </Container>
  );
}
