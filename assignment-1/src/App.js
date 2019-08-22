import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './styling/stles.css';

class App extends Component {

  state = {
    username: 'Derek'
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
 
  render() {

    return (
      
      <div className="AppContainer">
        <UserInput nameUpdate={this.nameChangeHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />        
      </div>

    )

  }


}

export default App;
