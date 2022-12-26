import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import NewFormEntry from "./components/NewFormEntry";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";
import { useDispatch } from "react-redux";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();

  const entries = useSelector((state) => state.entries);

  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
    console.log("app entries: ", entries);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      } else {
        return (totalIncomes += Number(entry.value));
      }
    });
    let total = totalIncomes - totalExpenses;
    setExpenseTotal(totalExpenses.toFixed(2));
    setIncomeTotal(totalIncomes.toFixed(2));
    setTotal(total.toFixed(2));
  }, [entries]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  //redux-store

  return (
    <Container>
      <Header
        as="h1"
        style={{
          backgroundColor: "#2185d0",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Budget
      </Header>
      <DisplayBalance title="Your balance" value={`$ ${total}`} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <Header as="h3">History</Header>

      <EntryLines entries={entries} />
      <Header as="h3">Add new transaction</Header>
      <NewFormEntry />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

// var initialEntries = [
//   {
//     id: 1,
//     description: "Work income",
//     value: 10000.0,
//     isExpense: false,
//   },
//   {
//     id: 2,
//     description: "Recharges",
//     value: 900.0,
//     isExpense: true,
//   },
//   {
//     id: 3,
//     description: "Food",
//     value: 780.78,
//     isExpense: true,
//   },
// ];
//const [entries, setEntries] = useState(initialEntries);
