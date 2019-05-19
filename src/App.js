import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Sample from "./components/sample";

const App = () => {
  return (
    <Provider store={store}>
      <Sample />
    </Provider>
  );
};

export default App;
