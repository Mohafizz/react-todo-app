import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import { workTodos, homeTodos } from "./seedData";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      homeTodos: workTodos,
      workTodos: homeTodos
    };
  }
}
export default TodoApp;
