import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button'
// import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';
import { GiHamburgerMenu } from "react-icons/gi";


export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameClass: 'no-scroll',
            modal: false
        }
    }

    listenScrollEvent = e => {
        if (window.scrollY > 20) {
            this.setState({ nameClass: 'scroll' })
        } else {
            this.setState({ nameClass: 'no-scroll' })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    handleModal = () => {
        this.setState({ modal: !this.state.modal })
        console.log('hello')
    }

    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className='toolbar_navigation-items'>
                    <NavLink exact to='/about' onClick={ () => this.handleModal() }> About </NavLink>
                    <NavLink exact to='/contact' onClick={ () => this.handleModal() }> Contact </NavLink>
                </div> 
            )
        }
    }


    renderLinks() {
        return (
            <header className={`${this.state.nameClass}`}>
                <nav className='toolbar_navigation'>
                    <div>
                        {/* <DrawerToggleButton onClick={this.handleModal()} /> */}
                        <Button
                            title={<GiHamburgerMenu/>}
                            className='hamburger-button'
                            onClick={() => this.handleModal()}
                        />

                    </div>

                    <div className='toolbar_logo'>
                        <NavLink exact to='/' > wagnerSOLIDS </NavLink>
                    </div>
                    <div className='spacer'></div>
                </nav>

            </header>
        )
    }

    render() {
        return (
            <>
                {this.renderLinks()}
                {this.renderNavModal()}
            </>
        )
    }
}

