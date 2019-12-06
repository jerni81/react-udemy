import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    username: ["chuck", "larry"]
  };

  handelChange = e => {
    this.setState({
      username: [e.target.value, "larry"]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username[0]}
          change={this.handelChange}
        />
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[1]} />
      </div>
    );
  }
}

export default App;
