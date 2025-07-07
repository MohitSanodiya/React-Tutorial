import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({ mode: "onChange" });

  // Controlling submitting button
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }

  // create own manual State Management
  const [isResetting, setIsResetting] = useState(false);

  // it is for resetting btn
  async function onReset() {
    setIsResetting(true);
    reset();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Reset Successfully....");
    setIsResetting(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name : </label>
        <input
          className={
            touchedFields.firstName && errors.firstName ? "input-error" : ""
          }
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "First Name must be at least 3 characters long",
            },
            maxLength: {
              value: 10,
              message: "First Name must be at most 10 characters long",
            },
          })}
        />
        {touchedFields.firstName && errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br />

      <div>
        <label>Middle Name : </label>
        <input
          className={
            touchedFields.middleName && errors.middleName ? "input-error" : ""
          }
          {...register("middleName", {
            required: true,
            minLength: {
              value: 3,
              message: "Middle Name must be at least 3 characters long",
            },
            maxLength: {
              value: 10,
              message: "Middle Name must be at most 10 characters long",
            },
          })}
        />
        {touchedFields.middleName && errors.middleName && (
          <p className="error-msg">{errors.middleName.message}</p>
        )}
      </div>
      <br />

      <div>
        <label>Last Name : </label>
        <input
          className={
            touchedFields.lastName && errors.lastName ? "input-error" : ""
          }
          {...register("lastName", {
            required: true,
            minLength: {
              value: 3,
              message: "Last Name must be at least 3 characters long",
            },
            maxLength: {
              value: 10,
              message: "Last Name must be at most 10 characters long",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Last Name must contain only letters",
            },
          })}
        />
        {touchedFields.lastName && errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br />

      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
      <br />
      <br />
      <input
        type="reset"
        disabled={isResetting}
        value={isResetting ? "Resetting....." : "Reset"}
        onClick={onReset}
      />
    </form>
  );
}

export default App;
