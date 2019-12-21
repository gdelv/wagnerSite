import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';


export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameClass: 'no-scroll'
        }
    }

    listenScrollEvent = e => {
        if(window.scrollY > 20) {
            this.setState({ nameClass: 'scroll' })
        } else {
            this.setState({ nameClass: 'no-scroll' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
    return (
        <header className={ `${this.state.nameClass}`}>
            <nav className='toolbar_navigation'>
                <div>
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
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
    )}
}

