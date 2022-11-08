import React from "react";
import SharedInput from "../SharedInput";
import Button from "../SharedButton";
import "./SharedForm.css";
import { useForm } from "react-hook-form";

function SharedForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1>MCGA 2022</h1>
      </header>
      <div className="upperDiv">
        <SharedInput
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
        />
        <SharedInput
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="lowerDiv">
        <Button text="Ingresar" />
      </div>
    </form>
  );
}

export default SharedForm;
