import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import './index.css';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/math-magicians-app" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </Router>
  </>
);

export default App;
