import React, { Component } from 'react'

export class Todolist extends Component {
    getStyle = ()=>{
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'}
        }
    }

    
    render() {
        return (
            <div style = {this.getStyle()}>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}

export default Todolist
