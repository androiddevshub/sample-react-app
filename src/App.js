import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Component from './Component';
import ClassComp from './ClassComp';
import HookComp from './HookComp';
import HookComp1 from './HookComp1';

// initial state
import {UserDetailContext} from "./context"

// functional component
function App() {

  // functional component

  const formatName = (user) => {
    return <h1>{user.firstName} {user.lastName}</h1>;
  }

  const sumTwoNumber = (num1, num2)=> {
    return num1*num2;
  }

  const userDetails = {
    firstName: "Shubham",
    lastName: "Jain",
    city: "Firozabad",
    country: "India"
  }

  return (
    <div className="App">
      {/* <Component
        // props keys and values
        name="Shubham"
        email="shubjain440@gmail.com"
        phone="7892342344"
       /> */}
       {/* <ClassComp /> */}
       <UserDetailContext.Provider value={userDetails}>
        <HookComp />
        <HookComp1 />
       </UserDetailContext.Provider>
       
    </div>
  );
}

export default App;
