import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { signInUser } from "../../firebase/autenticate";
import Title from "../assets/ANIMUS.svg";
import "./Login.css";
import NavBar from "../components/NavBar";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignIn = () => {
    signInUser(formData.email, formData.password);
  };
  return (
    <div className="p-8 flex flex-col justify-around">
      <div className="form mt-4">
        <NavLink to="/">
          <img src={Title} alt="title" />
        </NavLink>

        <input
          type="text"
          placeholder="email"
          className="p-2 my-4"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          type="text"
          placeholder="password"
          className="p-2 my-4"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <button onClick={handleSignIn}>Login</button>
      </div>
    </div>
  );
}
