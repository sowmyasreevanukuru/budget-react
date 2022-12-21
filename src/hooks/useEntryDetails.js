import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";

function useEntryDetails() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setExpense] = useState(true);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setExpense(true);
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setExpense,
    addEntry,
  };
}

export default useEntryDetails;
