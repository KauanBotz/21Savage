// src/Pages/App/App.jsx
import React from 'react';
import './App.css';
import Header from '../../Components/Header/Header.jsx';
import Principal from '../../Components/Principal/Principal.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from '../Album/Album.jsx';
import Singles from '../Singles/Singles.jsx';
import Feats from '../Feats/Feats.jsx';
import Projects from '../Projects/Projects.jsx';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/singles" element={<Singles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/feats" element={<Feats />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
