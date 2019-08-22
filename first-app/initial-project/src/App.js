import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      { id: '123', name: 'Derek', age: 56 },
      { id: '345', name: 'Chuck', age: 58 },
      { id: '133', name: 'Arnold', age: 34 },
      { id: '331', name: 'Terrence', age: 45}
    ],
    otherState: 'some other value',
    showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    const peeps = [...this.state.people];
    peeps.splice(personIndex, 1);
    this.setState({people: peeps});
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
          {this.state.people.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name} 
            age={person.age} 
            key={person.id} />
          })}
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
