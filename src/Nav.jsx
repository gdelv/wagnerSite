import React from 'react'
import { NavLink } from 'react-router-dom'
import './images/DrawerToggleButton';
import DrawerToggleButton from './images/DrawerToggleButton';

const Nav = () => {
    return(
    <nav>
        <h1>wagnerSOLIDS</h1>
        <DrawerToggleButton/>
        {/* <NavLink exact to ='/' > Home </NavLink> */}
        {/* <NavLink exact to='/about'> About </NavLink> */}
        {/* <NavLink exact to ='/contact'> Contact </NavLink> */}
    </nav>
    )
}

export default Nav