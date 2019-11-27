import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import './App.css';
import { Routes } from './routes';
import ControlledCarousel from './Carousel'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <>
        <ControlledCarousel />
      </>
      
      <main>
        <Routes />
      </main>
      
      <>
        <Footer />
      </>
    
    </>
  );
}

export default App;
