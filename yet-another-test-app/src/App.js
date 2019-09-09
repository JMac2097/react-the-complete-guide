import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    username: 'Derek',
    showPeople: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  toggleNamesHandler = () => {
    const show = this.state.showPeople
    this.setState({showPeople: !show})
  }

  render() {


    let showPeeps = null;

    if(this.state.showPeople) {
      showPeeps = (
        <div>
           <UserInput change={this.nameChangeHandler} />
        </div>
      )
    }

    return (

      <div>
        <button onClick={this.toggleNamesHandler}>Show Names</button>
        {showPeeps}
        <UserOutput username={this.state.username} />
      </div>

    )
  }

}

export default App;
