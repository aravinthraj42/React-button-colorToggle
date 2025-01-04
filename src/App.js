// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [color, setColor] = useState("");
//   // const [color2, setColor2] = useState("");
//   const [value, setValue] = useState(null);

//   const handleClickA = () => {
//     if (value) {
//       setValue(false);
//       setColor("green");
//       // setColor2("");
//     }
//   };
//   const handleClickB = () => {
//     if (!value) {
//       setValue(true);
//       setColor("blue");
//       // setColor2("");
//     } else if (!value) {
//       setColor("red");
//     }
//   };
//   return (
//     <div className="App">
//       <button
//         style={{ color: value ? `${color}` : null }}
//         onClick={handleClickA}
//       >
//         {" "}
//         Button A
//       </button>{" "}
//       <button
//         style={{ color: !value ? `${color}` : null }}
//         onClick={handleClickB}
//       >
//         Button B
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [buttonAColor, setButtonAColor] = useState("black");
  const [buttonBColor, setButtonBColor] = useState("black");
  const [clickCountA, setClickCountA] = useState(0);
  const [clickCountB, setClickCountB] = useState(0);

  const handleClickA = () => {
    setClickCountA((prevCount) => prevCount + 1);

    if ((clickCountA + 1) % 2 === 1) {
      setButtonBColor("green"); // First toggle color
    } else {
      setButtonBColor("red"); // Second toggle color
    }
  };

  const handleClickB = () => {
    setClickCountB((prevCount) => prevCount + 1);

    if ((clickCountB + 1) % 2 === 1) {
      setButtonAColor("blue"); // First toggle color
    } else {
      setButtonAColor("yellow"); // Second toggle color
    }
  };

  return (
    <div className="App">
      <button style={{ background: buttonAColor }} onClick={handleClickA}>
        Button A
      </button>
      <button style={{ background: buttonBColor }} onClick={handleClickB}>
        Button B
      </button>
    </div>
  );
}
