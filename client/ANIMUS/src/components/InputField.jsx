import React from "react";
import "./inputField.css";
export default function InputField({ name, placeholder }) {
  return (
    <div>
      <input
        type="text"
        id="Username"
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
