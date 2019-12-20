import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';


export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'transparent',
            textColor: 'white'
        }
    }

    listenScrollEvent = e => {
        if(window.scrollY > 100) {
            this.setState({ backgroundColor: 'white', textColor: 'black' })
        } else {
            this.setState({ backgroundColor: 'transparent', textColor: 'white' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
    return (
        <header className='toolbar' style={{background: this.state.backgroundColor, color: this.state.textColor}}>
            <nav className='toolbar_navigation' style={{color: this.state.textColor}}>
                <div>
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>

                <div className='toolbar_logo' style={{color: this.state.textColor}}>
                    <NavLink exact to='/' > wagnerSOLIDS </NavLink>
                </div>
                <div className='spacer'></div>
                

                <div className='toolbar_navigation-items'>
                    <NavLink exact to='/about'> About </NavLink>
                    <NavLink exact to='/contact'> Contact </NavLink>
                </div>
            
            </nav>

        </header>
    )}
}

