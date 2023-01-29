import React from "react";
import AnimusTittle from "../components/AnimusTittle";
import LoginButton from "../components/loginButton";
import Password from "../components/Password";
import InputField from "../components/InputField";

export default function Login() {
  return (
    <div className="loginBox">
      <h1> ANIMUS</h1>
      <InputField name={"UserName"} placeholder="UserName/Email Address" />
      <InputField name={"Password"} placeholder="Password" />
      <LoginButton />
    </div>
  );
}
