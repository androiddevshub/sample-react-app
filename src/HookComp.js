import React, {useState, useEffect, useRef, useContext} from "react";
import {UserDetailContext} from "./context"

function HookComp() {

  const userData = useContext(UserDetailContext);
  console.log("userData", userData)

 
  const [counter, setCounter] = useState(0);

  const inputEl = useRef(null);

  useEffect(()=> {
    console.log("Hello world")
  }, [counter])



  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubtract = () => {
    setCounter(counter - 1)
  }

  console.log("inputEl outside", inputEl)
  
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    console.log("inputEl inside", inputEl)
    console.log("inputEl.current", inputEl.current)
    inputEl.current.focus();
  };

  return (
    <>
      {/* <p>Counter - {counter}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button> */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>


      <div style={{width: "300px", border: "1px solid black"}}>
        <h1>User name</h1>
        <p>{userData.firstName} {userData.lastName}</p>
        
      </div>

    </>
  )
}

export default HookComp;