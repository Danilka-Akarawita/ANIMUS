import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../components/Button";
import InputField from "../components/InputField";
import "./Login.css";
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <>
      <NavBar />

      <div className="loginBox">
        <h1> ANIMUS</h1>
        <InputField name={"UserName"} placeholder="UserName/Email Address" />
        <InputField name={"Password"} placeholder="" />
        <LoginButton />
      </div>
    </>
  );
}
