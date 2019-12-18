import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';


const SideDrawer = (props) => {
    let drawerClasses = ['side-drawer']
    if (props.show) {
        drawerClasses = ['side-drawer', 'open']
    }

    return (
        <div className='side-drawer'>
            {/* <NavLink exact to ='/' > Home </NavLink> */}
            <NavLink exact to='/about'> About </NavLink>
            <NavLink exact to='/contact'> Contact </NavLink>
        </div>
    )
}


export default SideDrawer