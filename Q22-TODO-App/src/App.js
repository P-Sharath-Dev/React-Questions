import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  handleAdd = (text) => {
    this.setState((prevState) => {
      console.log("prevState : ", prevState);
      return { todos: [{ text }, ...prevState.todos] };
    });
  };

  handleRemove = (index) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo, todoIndex) => {
          return todoIndex !== index;
        }),
      };
    });
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd} />
        {/* sending todos array as props to list component */}
        <List todoList={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
