import React from 'react'
import './DrawerToggleButton.css'

const drawerToggleButton = props => {
    return(
    <button className='toggle-button' onClick={props.onClick}>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
    </button>
    )
}


export default drawerToggleButton
