import logo from './logo.svg';
import './App.css';
import ComponentOne from './Component';
import ClassComp from './ClassComp';
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
      {formatName(user)}
      <ClassComp />
    </div>
  );
}

export default App;
