import "./styles.css";
import { useState } from "react";
import tailwindConfig from "./tailwind.config.js";

export default function App() {
  const [input, setInput] = useState(""); // '' is the initial state value
  const [output, setOutput] = useState(""); // '' is the initial state value

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
    <div
      className="
    App font-poppins 
    w-screen h-screen bg-gradient-to-br 
    from-gray-900 to-gray-700 flex-col flex justify-start items-center h-full bg-red-900"
    >
      <div
        className="
      bg-clip-text text-transparent bg-gradient-to-l mt-2 from-blue-400 to-red-400 
      text-5xl font-bold p-8 "
      >
        Order References
      </div>

      <textarea
        placeholder={"Enter text here:"}
        value={input}
        onInput={(e) => setInput(e.target.value)}
        className="border-2 bg-transparent p-3 text-gray-300 
        h-full mt-3 w-8/12 rounded text-xl
        border-opacity-50 border-gray-300"
      />

      <button
        className="
        border-2 m-7 p-3 text-xl text-green-200 
        border-green-200 rounded-full 
        bg-gray-800
        focus:outline-none
        transition-opacity
        duration-150
        ease-out
        hover:opacity-60
        shadow-2xl"
        onClick={orderInput}
      >
        Order Text
      </button>
      <p />

      <textarea
        placeholder="Output here"
        value={output}
        className="
        border-2 rounded 
        border-2 bg-transparent p-3 text-gray-400 
        h-full mb-20 w-8/12 rounded text-xl
        border-opacity-50 border-gray-300"
      />
    </div>
  );
}
