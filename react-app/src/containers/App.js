import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  state = {
    persons:[
      {id:"dsf", name : "Dimitris", age :"24"},
      {id:"df", name : "Nikos", age :"15"},
      {id:"hjg", name : "Baggelsi", age :"25"}
    ] ,
    showPersons:false   
  }


  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    // alios tha mou ferei mono reference
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;




    this.setState({
      persons:   persons
    } )

  }

  deletePersonHandler= (personIndex) =>{

    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons : persons})

  }

  toggleNames = ()=> {

    const isShowing = this.state.showPersons;
    this.setState({    
      showPersons:!isShowing
    })

  }

  render() {    

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>          
            <Persons 
              clicked = {this.deletePersonHandler}
              persons = {this.state.persons}
              changed = {this.nameChangedHandler} />                                    
          </div>
      );
    }

  
    return (
        <div className="App">
          <Cockpit
            onClick = {this.toggleNames}
          />
          {persons}
        </div>
      
    );
  }
}

export default App; 
