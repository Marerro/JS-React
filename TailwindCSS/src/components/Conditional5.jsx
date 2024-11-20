import { useState } from "react";

function Conditional5() {
  const [color, setColor] = useState("");

  let backgroundColor;

  const changeColor = (type) => {
    document.body.style.backgroundColor = backgroundColor;
    setColor(type);
  }

  switch (color) {
    case "success":
      backgroundColor = "green";
      break;
    case "error":
      backgroundColor = "red";
      break;
    case "warning":
      backgroundColor = "yellow";
      break;
    default:
      backgroundColor = "transparent";
  }

  return (
  <>
  <div className="p-3">
  <button className="p-3" onClick={() => changeColor("success")}>Set to Green </button>
  <button className="p-3" onClick={() => changeColor("error")}> Set to Red</button>
  <button className="p-3" onClick={() => changeColor("warning")}> Set to Yellow</button>
  </div>
  </>
  )
}

export default Conditional5;
