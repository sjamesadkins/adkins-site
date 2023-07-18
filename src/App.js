import './App.css';
import Landing from './components/Landing'
import Projects from './components/Projects';
import Adkins from './Images/Adkins.jpg'
import Navbar from './components/Navbar'
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <body className='body'>
          <div className="App">
            <Landing></Landing>
          </div>
      </body>
    </>
  );
}

export default App;

