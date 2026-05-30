// Complete the HomePage Component and export it
import Form from "./Form.js";

export const name = "abc";
export const email = "abc@gmail.com";

function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}

export default HomePage;
