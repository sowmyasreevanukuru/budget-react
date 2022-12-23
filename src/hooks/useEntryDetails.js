import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { updateEntryRedux } from "./../actions/entries.actions";
import { useEffect } from "react";
import { closeEditModel } from "../actions/models.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModel());
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  }
  function resetValues() {
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
    updateEntry,
  };
}

export default useEntryDetails;
