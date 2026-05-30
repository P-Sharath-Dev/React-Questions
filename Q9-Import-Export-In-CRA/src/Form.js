// Complete the Form Component and export it
import { name, email } from "./HomePage.js";

const HandleSubmit = (event) => {
  event.preventDefault();
};

const Form = () => (
  <>
    <div>
      <form onSubmit={HandleSubmit}>
        {/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input type="text" placeholder="Name" value={name} readOnly /> <br></br>
        <input type="email" placeholder="Email" value={email} readOnly />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  </>
);

export default Form;
