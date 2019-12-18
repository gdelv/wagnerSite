import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';


const Toolbar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>

                <div className='toolbar_logo'>
                    <NavLink exact to='/' > wagnerSOLIDS </NavLink>
                </div>
                <div className='spacer'></div>
                

                <div className='toolbar_navigation-items'>
                    <NavLink exact to='/about'> About </NavLink>
                    <NavLink exact to='/contact'> Contact </NavLink>
                </div>
            
            </nav>

        </header>
    )
}

export default Toolbar