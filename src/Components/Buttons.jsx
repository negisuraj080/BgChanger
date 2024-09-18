import React from "react";
import { useState } from "react";

const Buttons = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className="hero" style={{ backgroundColor: color }}>
      <div className="BtnContainer">
        <button style={{ backgroundColor: "red" }} onClick={()=>setColor("red")}>
          Red
        </button>
        <button style={{ backgroundColor: "Blue" }} onClick={()=>setColor("Blue")} >Blue</button>
        <button style={{ backgroundColor: "green" }} onClick={()=>setColor("Green")}>Green</button>
        <button style={{ backgroundColor: "olive" }} onClick={()=>setColor("Olive")}>Olive</button>
        <button style={{ backgroundColor: "gray" }} onClick={()=>setColor("Gray")}>Gray</button>
        <button style={{ backgroundColor: "yellow" }} onClick={()=>setColor("Yellow")}>Yellow</button>
        <button style={{ backgroundColor: "pink" }} onClick={()=>setColor("Pink")}>Pink</button>
        <button style={{ backgroundColor: "purple" }} onClick={()=>setColor("Purple")}>Purple</button>
        <button style={{ backgroundColor: "Lavender" }} onClick={()=>setColor("Lavender")}>Lavender</button>
        <button style={{ backgroundColor: "white" }} onClick={()=>setColor("White")}>White</button>
        <button style={{ backgroundColor: "black", color: "white" }} onClick={()=>setColor("Black")}>
          Black
        </button>
      </div>
    </div>
  );
};

export default Buttons;
