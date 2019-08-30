import React from 'react'

function Header() {

   const headerStyle = {
    textAlign:'center',
    background: '#403c30',
    padding: '20px 0',
    margin: 'auto 0',
    color: 'white'
    }

    return (
        <div>
            <header>
                <h1 style={headerStyle}>TodoList</h1>
            </header>
        </div>
    )
}


export default Header