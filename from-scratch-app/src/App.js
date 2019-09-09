import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    username: 'derek',
    randomSwear: 'Arse'
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  swearChangeHandler = (event) => {
    this.setState({
      randomSwear: event.target.value
    })
  }

  render() {

    return (

      <div>
        Hello <br />
        <UserInput nameChange={this.nameChangeHandler} val={this.state.username} />
        <UserInput nameChange={this.swearChangeHandler} val={this.state.randomSwear} />
        <UserOutput nameValue={this.state.username} swearValue={this.state.randomSwear}/>
      </div>

    )

  }


}

export default App;
