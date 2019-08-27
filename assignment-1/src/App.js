import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './styling/stles.css';

class App extends Component {

  state = {
    usernames: [
      { id: '001', name: 'Derek'},
      { id: '002', name: 'Arnold'},
      { id: '003', name: 'Dick'},
      { id: '004', name: 'Nigel'},
      { id: '005', name: 'BlastFace'},
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
 
  render() {

    let usersList = (
      <div>
        {this.state.usernames.map((user, id) => {
          return <UserOutput 
          name={user.name}
          key={user.id} />
        })}
      </div>
    )

    return (
      
      <div className="AppContainer">
        <UserInput 
        nameUpdate={this.nameChangeHandler} 
        username={this.state.username} />
        {usersList}       
      </div>

    )

  }


}

export default App;
