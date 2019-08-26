import React, { Component } from 'react';
import ToggleUsers from './ToggleUsers/ToggleUsers';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    people: [
      {id: '01', name: 'Derek'},
      {id: '02', name: 'Arnold'}
    ]
  }



  render() {

    return (
      <div>
        <ToggleUsers />
        <UserInput />
        <UserOutput />

      </div>
    );
  }
}

export default App;