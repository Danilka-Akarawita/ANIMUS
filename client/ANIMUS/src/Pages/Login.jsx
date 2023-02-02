import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../components/Button";
import InputField from "../components/InputField";
import "./Login.css";
import Title from "../assets/ANIMUS.svg";
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <>
      <NavBar />

      <div className="flex flex-col justify-center align-middles bg-grey">
        <h1 className="text-center "> ANIMUS</h1>

        <img src={Title} alt="title" />
        <InputField name={"UserName"} placeholder="UserName/Email Address" />
        <InputField name={"Password"} placeholder="" />
        <LoginButton />
      </div>
    </>
  );
}
