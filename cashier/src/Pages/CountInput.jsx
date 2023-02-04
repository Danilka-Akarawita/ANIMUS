import React from 'react'
import "./Login.css";
import Loginbtn from '../../../client/ANIMUS/src/components/Loginbtn';
export default function CountInput() {
  return (
    <>
    <Loginbtn name="Log out"/>
    <div className="form " >
        <input
          type="text"
          placeholder="Enter contact number"
          className="p-4 my-4"
          name="contactNumber"
          
        />

        <input
          type="text"
          placeholder="Enter Bag count"
          className="p-4 my-4"
          name="bagCount"
         
        />
    </div>
    </>
    
  )
}
