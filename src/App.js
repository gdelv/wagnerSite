import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import './App.css';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Routes />
      </main>
      <>
        <Footer/>
      </>
    </>
  );
}

export default App;
