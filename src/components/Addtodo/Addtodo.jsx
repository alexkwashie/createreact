import React from 'react'

class Addtodo extends React.Component {
    state ={
        task:''
    }

    onChangemethod = (e) => {
        this.setState({task: e.target.value})
    }

render() {
    return (
        <form style={{display: 'flex',}}>
        <input type="text" name="task" placeholder="Add Todo ..." style={{flex: '9', padding: '5px'}} value={this.state.task} onChange = {this.onChangemethod} />

        <input type="submit" value="submit" style={{flex: '1', background: '#77c722'}} className= 'btn'/>
        </form>

    )
}

}
export default Addtodo
