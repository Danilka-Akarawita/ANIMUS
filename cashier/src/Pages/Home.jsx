import React from "react";
import Logo from "../assets/main-logo.svg";

export default function Home() {
  return (
    <div className="">
    <div className= " flex flex-col space-y-6  border-4 rounded-lg border-yellow-100  justify-around " >
    <img className="" src={Logo} alt="logo"/>
    <h1 className= "text-white text-center text-xl font-bold "> ADMIN LOGIN</h1>
    <div className="flex flex-row space-x-10 text-white justify-center"><button> Login</button> <button>signup</button></div>
    <p1 className="text-white text-xs text-center pt-10"> Contact US  | Privacy Policy | About US</p1>
     <div >
   
    </div>

    </div>
    </div>
  


  )
    
}
