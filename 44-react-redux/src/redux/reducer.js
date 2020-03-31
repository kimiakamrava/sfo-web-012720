const reducer = (oldState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...oldState, count: oldState.count + action.amount };
    default:
      return oldState;
  }
};

export default reducer;
