import { CodeBlock, dracula } from "react-code-blocks";

function SampleCode() {
  return (
    <div style={{ width: "90%" }}>
      <CodeBlock
        text={code}
        language={"javascript"}
        showLineNumbers={true}
        theme={dracula}
      />
    </div>
  );
}
export default SampleCode;

const code = `
var text = "";
var i = 0;
while (i < 5) {
  text += "<br>The number is " + i;
  i++;
}
`;
