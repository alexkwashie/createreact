import React from 'react';
import './App.css';
import Todo from './components/Todos/Todos';

class App extends React.Component {
//set the state to hold the items that will be displayed on the page
state = {

  todo:[
    {
      id:1,
      task: 'taking trash out',
      completed: false
    },
    {
      id:2,
      task: 'shave hair',
      completed: true
    },
    {
      id:3,
      task: 'wash car outside',
      completed: false
    }

  ]

}

handleInputChange = () =>{
  console.log('hello');

}

  render(){
    //console.log(this.state)

    return (
      <div className="App">
        <h1>Welcome</h1>
        <Todo todo={this.state.todo} handleInputChange = {this.handleInputChange}/>
      </div>
    );
  }

}

export default App;
