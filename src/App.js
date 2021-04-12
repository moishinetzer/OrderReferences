import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState(); // '' is the initial state value
  const [output, setOutput] = useState(); // '' is the initial state value

  function orderInput() {
    var splitInput = input.split("\n");

    setOutput(
      splitInput
        .sort()
        .filter(function (e) {
          return e;
        })
        .join("\n\n")
    );
  }

  return (
    <div className="App">
      <h1>Order References</h1>
      <textarea
        style={{ width: "70%" }}
        rows="9"
        placeholder={"Enter text here:"}
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />

      <p />
      <button onClick={orderInput}>Order Text</button>
      <p />

      <textarea
        style={{ width: "70%" }}
        rows="9"
        placeholder="Output here"
        value={output}
      />
    </div>
  );
}
