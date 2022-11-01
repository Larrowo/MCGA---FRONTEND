import React from "react";

function SharedButton({ text, functionProp, type }) {
  return (
    <button type={type} onClick={functionProp}>
      {text}
    </button>
  );
}

export default SharedButton;
