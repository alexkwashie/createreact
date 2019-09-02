import React from 'react';
import Todolist from '../Todolist/Todolist';
import PropTypes from 'prop-types';


class Todos extends React.Component {

  render() {
    return this.props.todo.map((tdo)=>(
        <Todolist key={tdo.id} todo = {tdo} handleInputChange = {this.props.handleInputChange} delTodo = {this.props.delTodo}/> //todo is the prop
    ));
  }

}

//PropType are a validation for what props should have eg: required etc
Todos.propTypes = {
todo:PropTypes.array.isRequired
}

export default Todos;
