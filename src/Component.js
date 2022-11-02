import React, {useState} from "react";

function Component({name, email, phone}) {

  const [inputText, setInputText] = useState("");

  const inputHandleChange = (e) => {
    setInputText(e.target.value)
  }


  return (
    <div>
      <p>Name - {name}</p>
      <p>Email - {email}</p>
      <p>Phone - {phone}</p>

      <input onChange={inputHandleChange}  /> 
      <p>{inputText}</p>
    </div>
  )
}

export default Component;

