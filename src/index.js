import { createStore } from "redux";
const reducer = (state = 0, action) => {
  console.log("Reducer called");
  return state;
};
const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Current State is", store.getState());
});
