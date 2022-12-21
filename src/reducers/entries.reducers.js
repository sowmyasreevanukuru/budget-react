const reducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    default:
      return state;
  }
};

export default reducer;

var initialEntries = [
  {
    id: 1,
    description: "Work income redux",
    value: 10000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Recharges",
    value: 900.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Food",
    value: 780.78,
    isExpense: true,
  },
];
