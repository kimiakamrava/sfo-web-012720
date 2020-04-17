const reducer = (oldState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...oldState, count: oldState.count + 1 };
    case 'UPDATE':
      return { ...oldState, count: oldState.count + action.amount };
    default:
      return oldState;
  }
};

export default reducer;
