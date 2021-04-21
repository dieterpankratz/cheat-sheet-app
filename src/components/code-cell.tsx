import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";
import Resizeable from "./resizable";

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizeable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <CodeEditor
          initialValue="const a = 1;"
          onChange={(value) => setInput(value)}
        />
        <Preview code={code} />
      </div>
    </Resizeable>
  );
};

export default CodeCell;
