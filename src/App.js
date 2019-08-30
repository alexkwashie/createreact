import React from 'react';
import Header from './components/Layout/Header'
import './App.css';
import Todo from './components/Todos/Todos';
import AddTodo from './components/Addtodo/Addtodo';

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
      completed: false
    },
    {
      id:3,
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



  render(){
    //console.log(this.state)

    return (
      <div className="App">
        <Header/>
        <AddTodo />
        <Todo todo={this.state.todo} handleInputChange = {this.handleInputChange} delTodo = {this.delTodo}/>
      </div>
    );
  }

}

export default App;
