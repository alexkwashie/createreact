import React from 'react';
import Todolist from '../Todolist/Todolist';
import

class Todos extends React.Component {
  render(){

    return this.props.todo.map((tdo)=>(
        <Todolist key={tdo.id} todo = {tdo}/> //todo is the prop
    ));

  }

}

export default Todos;
