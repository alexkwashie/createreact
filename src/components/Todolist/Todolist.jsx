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

    btnStyle = {
        float: 'right',
        border:'none',
        color: 'white',
        background:'red',
        padding: '5px',
        borderRadius:'3px'
    }

    render(){
        return (
            //get object items and put into const to use below
            <div style = {this.getStyle()}>
                <h3>
                <input type="checkbox" onChange={this.props.handleInputChange.bind(this, this.props.todo.id)} /> {'  '} {/*bind allows youi to pull specified object item*/}
                {this.props.todo.title}
                <button style = {this.btnStyle} onClick={this.props.delTodo.bind(this,this.props.todo.id)}>delete</button>
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
