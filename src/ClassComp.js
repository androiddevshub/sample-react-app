import React from "react";
// class component
class ClassComp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      name: "Shubham"
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    console.log("Print me")
    this.setState({date: new Date(), name: "Jain"})
  }

  render(){
    return (
      <>
        <h1>Date & Time - {this.state.date.toLocaleTimeString()} - {this.state.name}</h1>
        
      </>
    )
  }
}

export default ClassComp;