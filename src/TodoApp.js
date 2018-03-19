import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import { workTodos, homeTodos } from "./SeedData";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      homeTodos: homeTodos,
      workTodos: workTodos
    };
  }
  render() {
    return (
      <div>
        <TodoList title="Home todos" todos={this.state.homeTodos} />
        <TodoList title="Work todos" todos={this.state.workTodos} />
      </div>
    );
  }
}
export default TodoApp;
