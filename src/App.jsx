import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import "./App.css";
import reducer from "./components/reducers/AppState";
import DummyRoute from "./components/DummyRoute";

const store = createStore(reducer, applyMiddleware());

const App = () => {
  return (
    <Provider store={store}>
      <DummyRoute />
    </Provider>
  );
};

export default App;
