import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Footer from './components/Footer/Footer'
import './App.css';
import { Routes } from './routes';
import ControlledCarousel from './components/Carousel/Carousel'
// import SideDrawer from './components/SideDrawer/SideDrawer'
// import Backdrop from './components/Backdrop/Backdrop'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />


    // }
    return (
      <>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {/* <div style={{ height: '100%' }}>
          {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
          {/* {backdrop} */}
          
            {/* <ControlledCarousel /> */}
            <Routes/>
          

          {/* <main style={{ marginTop: '64px' }}>
            <p>this is the page content</p>
          </main> */}
          {/* <main>
        <Routes />
      </main> */}

          
            <Footer />
          
        {/* </div> */}
      </>
    );
  }
}

export default App;
