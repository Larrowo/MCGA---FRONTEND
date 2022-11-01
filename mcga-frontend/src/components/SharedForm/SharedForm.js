import React from "react";
import SharedInput from "../SharedInput";
import Button from "../SharedButton";
import "./SharedForm.css";

function SharedForm() {
  return (
    <form>
      <header>
        <h1>MCGA 2022</h1>
      </header>
      <div className="upperDiv">
        <SharedInput name="username" type="text" placeholder="Username" />
        <SharedInput name="username" type="text" placeholder="Username" />
      </div>
      <div className="lowerDiv">
        <Button text="Ingresar" />
      </div>
    </form>
  );
}

export default SharedForm;
