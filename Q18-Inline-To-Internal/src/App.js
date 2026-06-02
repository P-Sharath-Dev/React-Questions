import "./styles.css";
//create a object to store all the styles.
export default function App() {
  //css for form class
  const form = {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  };

  //css for signUp class
  const signUp = {
    fontSize: "2rem",
    letterSpacing: 2,
  };

  //css for input class
  const input = {
    padding: 10,
  };

  //css for div
  const div = {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  };

  //css for button
  const button = {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form style={form}>
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={signUp}>Sign Up</h3>
        <input style={input} placeholder="Username" />
        <input style={input} placeholder="Email" />
        <input style={input} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div style={div}>
          {/* Refactor the inline style to use the internal style. */}
          <button style={button}>Cancel</button>
          {/* Refactor the inline style to use the internal style. */}
          <button style={button}>Login</button>
        </div>
      </form>
    </div>
  );
}
