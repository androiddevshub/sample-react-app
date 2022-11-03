import React, {useState} from "react";

function Component({name, email, phone}) {

  const [formData, setFormData] = useState({name: "", email: "", phone: ""});
  const [userList, setUserList] = useState([]);
  
  const inputHandleChange = (e) => {
    setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}));
  }
  const handleSubmitClick = () => {
    setUserList([...userList, formData]);
    setFormData({name: "", email: "", phone: ""});
  }

  console.log("userList", userList);


  return (
    <div>
      <div>
        <br/> 
        <input onChange={(e)=>inputHandleChange(e)} name="name" value={formData.name} placeholder="Please enter your name" />
        <br/> <br/> 
        <input onChange={inputHandleChange} name="email" value={formData.email} placeholder="Please enter your email" /> 
        <br/> <br/> 
        <input onChange={inputHandleChange} name="phone" value={formData.phone} placeholder="Please enter your phone" /> 
        <br/> <br/> 
        <button onClick={handleSubmitClick}>Submit</button>
        <div>
          <table style={{border: "1px solid black"}}>
            <tr>
              <th style={{border: "1px solid black"}}>Name</th>
              <th style={{border: "1px solid black"}}>Email</th>
              <th style={{border: "1px solid black"}}>Phone</th>
            </tr>
            {
              userList.map((user, index)=> (
                <tr key={index}>
                  <td style={{border: "1px solid black"}}>{user.name}</td>
                  <td style={{border: "1px solid black"}}>{user.email}</td>
                  <td style={{border: "1px solid black"}}>{user.phone}</td>
                </tr>
              ))
            }
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Component;

