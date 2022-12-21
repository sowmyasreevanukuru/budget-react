import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import NewFormEntry from "./components/NewFormEntry";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
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
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].isExpense = isExpense;
      newEntries[index].value = value;
      //setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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

    //console.log(`total income ${totalIncomes} and total expense ${totalExpenses}`);
  }, [entries]);

  //redux-store

  //delete
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    //console.log("entries", entries);
    //console.log("result", result);
    // setEntries(result);
  }

  //add
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    // console.log(result);
    //setEntries(result);
    resetEntry();
  }

  //edit
  function editEntry(id) {
    // console.log(`Edit entry ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setExpense(entry.expense);
      setIsOpen(true);
    }
  }

  //reset entries
  function resetEntry() {
    setDescription("");
    setValue("");
    setExpense(true);
  }

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
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <Header as="h3">Add new transaction</Header>
      <NewFormEntry
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setExpense={setExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setExpense={setExpense}
      />
    </Container>
  );
}

export default App;
