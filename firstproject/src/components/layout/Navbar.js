import React from 'react'

const Navbar = props => {

    return (
        <nav className="navbar bg-primary">
            <h1>{props.title}</h1>
        </nav>
    )

}

Navbar.defaultProps = {
    title: "Github Finder"
}

export default Navbar
