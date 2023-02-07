import React from 'react'
import  Logo from "../assets/main-logo.svg";

export default function SignUp() {
  return (
    <div>
        <div className="flex flex-col space-y-6 border-4 rounded-lg border-yellow-100  justify-center bg-teal-900 p-4 flex items-center  ">
        <img className="" src={Logo} alt="logo"/>
            <div className="flex flex-row space-x-6 "> 
            <input type="text" placeholder="First name" className="p-2 "
          name="firstname"/>
          <input type="text" placeholder="Surname" className="p-2 "
          name="surname"/>
          </div>
          <input type="text" placeholder='Cashier Id' className="p-2  " name='cashierId'/>
          <input type="text" placeholder='Username / email address' className="p-2  " name='username/email'/>
          <input type="text" placeholder='New password' className="p-2  " name='newPassword'/>
          <button className="text-white  hover:bg-black"  > SIGN UP</button>
        </div>
      
    </div>
  )
}
