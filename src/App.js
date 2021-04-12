import "./styles.css";
import { useState } from "react";
import { Button, Typography } from "@material-ui/core";

export default function App() {
  const [input, setInput] = useState(); // '' is the initial state value
  const [output, setOutput] = useState(); // '' is the initial state value

  function orderInput() {
    if (input === (null || undefined)) {
      return;
    }

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
      <p />
      <Typography variant="h3">Order References</Typography>
      <p />
      <textarea
        style={{ width: "80%" }}
        rows="9"
        placeholder={"Enter text here:"}
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />

      <p />
      <Button variant="outlined" onClick={orderInput}>
        Order Text
      </Button>
      <p />

      <textarea
        style={{ width: "80%" }}
        rows="9"
        placeholder="Output here"
        value={output}
      />
    </div>
  );
}
