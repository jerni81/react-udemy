import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = {
    username: [
      "chuck",
      "larry"
    ]
  }
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username={this.state.username[0]}/>
        <UserOutput username={this.state.username[1]}/>
      </div>
    );
  }
}

export default App;
