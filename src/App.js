import logo from './logo.svg';
import './App.css';
import Component from './Component';
import ClassComp from './ClassComp';
import HookComp from './HookComp';
// functional component
function App() {

  // functional component

  const formatName = (user) => {
    return <h1>{user.firstName} {user.lastName}</h1>;
  }

  const sumTwoNumber = (num1, num2)=> {
    return num1*num2;
  }

  const user = {
    firstName: "Shubham",
    lastName: "Jain"
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
       <HookComp />
       <HookComp1 />
    </div>
  );
}

export default App;
