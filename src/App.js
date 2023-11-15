import './App.css';
import Landing from './components/Landing'
import Projects from './components/Projects';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App;

