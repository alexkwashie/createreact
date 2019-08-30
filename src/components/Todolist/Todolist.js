import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todolist extends Component {
    getStyle = () =>{
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: 'dotted black 1px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'}
    }



    render(){
        return (
            <div style = {this.getStyle()}>
                <h3>
                <input type="checkbox" onChange={this.props.handleInputChange} />
                {this.props.todo.task}
                </h3>
            </div>
        )
    }
}



//PropType are a validation for what props should have eg: required etc
Todolist.propTypes = {
    todo:PropTypes.object.isRequired
    }

export default Todolist
