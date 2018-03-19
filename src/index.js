import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import TodoApp from "./TodoApp";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
registerServiceWorker();
