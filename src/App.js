import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:"John" ,place:"Ahmedabad"},
      {name:"Joyal", place:"Mumbai"},
      {name:"Tony" ,place:"Goa"}
    ]
  }
  switchnameHandler=(newname)=>{
    this.setState({
      persons:[
      {name:newname ,place:"Ahmedabad"},
      {name:"Shah", place:"Gandhinagar"},
      {name:"Tony" ,place:"Goa"}
    ]})

  }
  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
      {name:"MAX",place:"Ahmedabad"},
      {name:event.target.value, place:"Gandhinagar"},
      {name:"Tony" ,place:"Goa"}
    ]})

  }
  render() {
    return (
      <div className="App">
        <h1>this is react app</h1>
        <p>this is working</p>
        <button onClick={()=>this.switchnameHandler('MAXIMILLIAN!')}>Switch name</button>
        <Person name={this.state.persons[0].name} place={this.state.persons[0].place}/>
        <Person name={this.state.persons[1].name} place={this.state.persons[1].place} click={this.switchnameHandler.bind(this,'MAX')} changed={this.nameChangeHandler}>my age:19</Person>
        <Person name={this.state.persons[2].name}  place={this.state.persons[2].place} />
      </div>
    );
    }


}

export default App;
