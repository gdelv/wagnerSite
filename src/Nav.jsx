import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return(
    <nav>
        <h1>wagnerSOLIDS</h1>
        <NavLink exact to ='/' > Home </NavLink>
        <NavLink exact to='/about'> About </NavLink>
        <NavLink exact to ='/contact'> Contact </NavLink>
    </nav>
    )
}

export default Nav