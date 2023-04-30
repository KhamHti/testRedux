import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColour() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(event) => setColor(event.target.value)} />
      <button
        style={{ margin: 10 }}
        onClick={() => {
          dispatch(changeColor(color));
          console.log(changeColor(color));
        }}
      >
        Change Colour
      </button>
    </div>
  );
}

export default ChangeColour;
