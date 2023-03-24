// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Countries></Countries>
    </div>
  );
}

export default App;
