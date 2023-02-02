import React from "react";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Logo from "../assets/main-logo.svg";
import LoginButton from "../components/Button";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <img src={Logo} alt="logo" />
        <div className="">
          <button>Login</button>
          <button>Login</button>
        </div>
        <h1> ANIMUS</h1>
      </div>
    </div>
  );
}
