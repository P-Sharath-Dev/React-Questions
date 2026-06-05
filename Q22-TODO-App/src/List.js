import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { handleRemove } = this.props;
    return (
      <div className="list">
        {this.props.todoList.map((list, index) => {
          //receiving todos array as props
          return (
            <Todo
              key={index}
              todo={list}
              index={index}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
    );
  }
}
