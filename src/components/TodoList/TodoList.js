import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1 id="todo-list">{this.props.title}</h1>
        {this.props.todos.map(e => (
          <ul>
            <li>{e}</li>
          </ul>
        ))}
      </div>
    );
  }
}
export default TodoList;
