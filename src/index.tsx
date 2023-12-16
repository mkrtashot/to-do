import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ToDoStore from "./store/ToDoStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={ToDoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
