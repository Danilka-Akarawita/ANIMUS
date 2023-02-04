import React from "react";
import { useState } from "react";
import { signUpUser } from "../../firebase/autenticate";
import { googleSignIn } from "../../firebase/autenticate";
import Title from "../assets/ANIMUS.svg";
import "./Login.css";
import NavBar from "../components/NavBar";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignUp = () => {
    signUpUser(formData.email, formData.password);
  };

  const handleGoogleSignIn=()=>{
    googleSignIn();
  };
  return (
    <>
      <NavBar />

      <div className="form">
        <img src={Title} alt="title" />

        <input
          type="text"
          placeholder="username"
          className="p-2 my-4"
          name="username"
          value={formData.username}
          onChange={handleFormChange}
        />

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
        <button onClick={handleSignUp}>Sign Up</button>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </>
  );
}
