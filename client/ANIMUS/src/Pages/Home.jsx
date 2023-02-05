import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../assets/main-logo.svg";
import LoginButton from "../components/Button";
import CountInput from "../../../../cashier/src/Pages/CountInput";

export default function Home() {
  return (
    <div className="p-8 flex flex-col justify-around">
      <div>
        <img className="my-4" src={Logo} alt="logo" />
        <div className="flex justify-around">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>SignUp</button>
          </NavLink>
          <NavLink to="/aboutus">
            <button>aboutUs</button>
          </NavLink>
          <NavLink to="/points">
            <button>Points</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
