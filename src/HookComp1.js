import React, {useState, useEffect, useRef, useContext} from "react";
import { UserDetailContext } from "./context";


function HookComp1() {
  const userData = useContext(UserDetailContext);
  console.log("userData", userData)


  return (
    <>
       <div style={{width: "300px", border: "1px solid black"}}>
        <h1>User address</h1>
        <p>{userData.city}, {userData.country}</p>
       </div>
    </>
  )
}

export default HookComp1;