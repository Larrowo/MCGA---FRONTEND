import React from "react";

function SharedInput({ type, placeholder, name, register }) {
  return <input name={name} type={type} placeholder={placeholder} />;
}

export default SharedInput;
