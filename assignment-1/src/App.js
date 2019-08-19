import React, { Component } from 'react';
import UserInput from './UserIntereactions/UserInput';
import UserOutput from './UserIntereactions/UserOutput';


class App extends Component {

  state = {
    username: 'Derek'
  }

  updateNameHandler = (val) => {
    this.setState = {
      username: val
    }
  }


  render() {

    return (

      <div>
      <h1>Assignment 1</h1>
      
      <UserInput textEntered={this.updateNameHandler}/>
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username}/>
      <UserOutput username={this.state.username}/>
      
      </div>
    );
  }
}

export default App;
