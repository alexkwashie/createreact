import React from 'react'

function Addtodo() {
    return (
        <form style={{display: 'flex',}}>
        <input type="text" name="task" placeholder="Add Todo ..." style={{flex: '9', padding: '5px'}}/>

        <input type="submit" value="submit" style={{flex: '1'}} className= 'btn'/>
        </form>

    )
}

export default Addtodo
