import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Layout/Header'
import './App.css';
import Todo from './components/Todos/Todos';
import About from './components/Pages/About';
import AddTodo from './components/Addtodo/Addtodo';
import uuid from 'uuid'

class App extends React.Component {
//set the state to hold the items that will be displayed on the page
state = {

  todo:[
    {
      id:uuid.v4(),
      task: 'taking trash out',
      completed: false
    },
    {
      id:uuid.v4(),
      task: 'shave hair',
      completed: false
    },
    {
      id:uuid.v4(),
      task: 'wash car outside',
      completed: false
    }

  ]

}

//Taggle check box
handleInputChange = (id) =>{
  //console.log(id);
this.setState({todo:this.state.todo.map((tdo)=>{
  if(tdo.id === id){
    tdo.completed= !tdo.completed //we toggle it here
  }
    return tdo;
}) })
}

//Delete todos
delTodo = (id) => {
  //console.log(id);
  this.setState({todo:[...this.state.todo.filter(tdo => tdo.id !== id)] }) //filter means return todos which id is not equal to what is clicked
}

addtodo = (task)=>{

  const newTodo = {
    id:uuid.v4(),
    task: task,
    completed: false
  }
  this.setState({todo: [...this.state.todo,newTodo] })
}

  render(){
    //console.log(this.state)

    return (
      <Router>
        <div className="App">
        <Header/>
        <Route exact path = "/" render = {props => ( //exact means show only this path
          <React.Fragment>
            <AddTodo addtodo = {this.addtodo}/>
            <Todo todo={this.state.todo} handleInputChange = {this.handleInputChange} delTodo = {this.delTodo}/>
          </React.Fragment>
        )}/>

          <Route path = "/about" component= {About} />

      </div>

      </Router>

    );
  }

}

export default App;
