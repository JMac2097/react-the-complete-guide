import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      { name: 'Derek', age: 56 },
      { name: 'Chuck', age: 58 },
      { name: 'Arnold', age: 34 }
    ],
    otherState: 'some other value',
    showPeople: false
  }

  switchNameHandler = (newName) => {
    this.setState( {people: [
      { name: newName, age: 356 },
      { name: 'Chuck', age: 58 },
      { name: 'Dick', age: 23213 }
    ]
   } )
  }

  nameChangedHandler = (event) => {
    this.setState( {people: [
      { name: 'Derek', age: 356 },
      { name: event.target.value, age: 58 },
      { name: 'Dick', age: 23213 }
    ]
   } )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPeople) {
      persons = (
        <div> 
          <Person 
          name={this.state.people[0].name}
          age={this.state.people[0].age}/>
          <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Gerald!')}
          changed={this.nameChangedHandler}
          >My hobbies: killing</Person>
          <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}/>
        </div> 
      )
    }



    return (
      <div className="App">
        <h1> Hello world</h1>

        <button style={style} onClick={this.togglePersonHandler}>Toggle People</button>
        {persons}
      </div>
    );
  }
}

export default App;
