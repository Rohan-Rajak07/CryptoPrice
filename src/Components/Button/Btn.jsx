import React from "react";
import "./Btn.css";

function Btn({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn"}
      onClick={() => onClick()}
    >{text}</div>
  );
}

export default Btn