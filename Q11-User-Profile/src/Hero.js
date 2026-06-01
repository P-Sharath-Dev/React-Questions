// Create component here to display the Basic information such as
import { Component } from "react";
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

export default class Hero extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Name: Pranav Sharad Yeole</strong>
        </p>

        <p>Email: pranav@google.com</p>

        <p>Phone: 8546465544</p>

        <p>Address: ABC, xyz street.</p>
      </div>
    );
  }
}
