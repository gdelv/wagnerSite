import React from 'react';
import Nav from './Nav'
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

    </>
  );
}

export default App;
