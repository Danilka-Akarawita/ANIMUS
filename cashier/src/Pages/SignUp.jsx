import React from 'react'
 import  Logo from "../assets/main-logo.svg";
import { useState } from 'react';
import { signUpCashier,googleSignIn } from '../../firebase/authentication';

export default function SignUp() {
  const [formData, setFormData] = useState({
  
    firstName:"",
    lastName:"",
    email: "",
    cashierId: "",
    password: "",
   
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignUp = () => {
    signUpCashier(
      formData.email,
      formData.password,
      formData.firstName,
      formData.cashierId
    );
  };
  

  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  



  return (
    <div>
        <div className="flex flex-col space-y-6 border-4 rounded-lg border-yellow-100  justify-center bg-teal-900 p-4 flex items-center  ">
        <img className="" src={Logo} alt="logo"/>
            <div className="flex flex-row space-x-6 "> 
            <input type="text"
             placeholder="First name"
              className="p-2 "
          name="firstName"
          value={formData.firstName}
          onChange={handleFormChange}
          />
          <input type="text" 
          placeholder="Surname"
           className="p-2 "
          name="lastName"
          value={formData.lastName}
          onChange={handleFormChange}
          />
          </div>
          <input type="text" 
          placeholder='Cashier Id'
           className="p-2  " 
           name='cashierId'
           value={formData.cashierId}
          onChange={handleFormChange}
          />
          <input type="text" 
          placeholder='Username / email address' 
          className="p-2  " 
          name='email'
          value={formData.email}
          onChange={handleFormChange}
          />
          <input type="text"
           placeholder='New password' 
           className="p-2  "
            name='password'
            value={formData.password}
          onChange={handleFormChange}
            />
          <button className="text-white  hover:bg-black" onClick={handleSignUp} > SIGN UP</button>
          <button onClick={handleGoogleSignIn}>google</button>
        </div>
      
    </div>
  );
}
