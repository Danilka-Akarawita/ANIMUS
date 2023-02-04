import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../assets/main-logo.svg";
import LoginButton from "../components/Button";
import CountInput from "./CountInput";

export default function Home() {
  return (
    // <div>
    //   <div>
    //     <NavBar />
    //     <img src={Logo} alt="logo" />
    //     <div className="flex justify-between">
    //       <NavLink to="/login">
    //         <button>Login</button>
    //       </NavLink>
    //       <NavLink to="/">
    //         <button>SignIn</button>
    //       </NavLink>
    //     </div>
    //     <h1> ANIMUS</h1>
    //   </div>
    // </div>
    <CountInput/>
  );
}
