import React from 'react'
import "./Casher.css"
// import Loginbtn from '../../../client/ANIMUS/src/components/Loginbtn';
export default function CountInput() {
  return (
    <>
    <button>Logout</button>
    <div className="form " >
        <input
          type="text"
          placeholder="Enter contact number"
          className="p-2 my-2"
          name="contactNumber"
          
        />

        <input
          type="text"
          placeholder="Enter Bag count"
          className="p-3 my-2"
          name="bagCount"
         
        />
    </div>
    <button className="flex  justify-end">Proceed</button>
    </>
    
  )
}
