import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Fred', age: 89 },
      { name: 'Arnold', age: 98 },
      { name: 'Yoda', age: 900 },
    ]
  }

  render() {
    return (
      <div className="App">

      
        <h1>Hi, I am a react app</h1>
        <p>This is paragraph 2!!</p>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}> A jedi master </Person>

 
      </div>
    );
  }
}

export default App;
