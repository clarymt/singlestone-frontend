import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Body from './components/Body/Body';
import Steps from './components/Steps/Steps';


function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Steps />
    </div>
  );
}

export default App;
