import React from 'react'

class Addtodo extends React.Component {
    state ={
        task:''
    }

    onChangemethod = (e) => {
        this.setState({task: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addtodo(this.state.task);
        this.setState({task:''});
    }
render() {
    return (
        <form style={{display: 'flex',}} onSubmit = {this.onSubmit}>
        <input type="text" name="task" placeholder="Add Todo ..." style={{flex: '9', padding: '5px'}} value={this.state.task} onChange = {this.onChangemethod} />

        <input type="submit" value="submit" style={{flex: '1', background: '#77c722'}} className= 'btn'/>
        </form>

    )
}

}
export default Addtodo
