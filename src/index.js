import { createStore } from "redux";
const reducer = (state = 0, action) => {
  console.log("Reducer called");

  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};
const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Current State is", store.getState());
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "INCREMENT",
});
