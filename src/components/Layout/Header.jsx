import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

   const headerStyle = {
    textAlign:'center',
    background: '#403c30',
    padding: '20px 0',
    margin: 'auto 0',
    color: 'white'
    }

    const linkStyle = {
        color: 'white',
        padding: '1px',
        textDecoration: 'none'
    }
    return (
        <div>
            <header  style={headerStyle}>
                <h1>TodoList</h1>
                <Link to= "/" style={linkStyle} >Home</Link> | <Link to = "/about" style={linkStyle}>About</Link>
            </header>
        </div>
    )
}


export default Header