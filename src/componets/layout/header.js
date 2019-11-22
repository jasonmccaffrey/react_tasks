import React from 'react';
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <h1>Header</h1>
            <nav className="main-navigation">
                <Link className="nav-link" to="/">Home</Link> | <Link className="nav-link" to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;
