import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav';
import Footer from './Footer';
import Home from './Home';
import Impact from './Impact';
import Practices from './Practices'; 
import Legal from './Legal';
import './App.css';

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/practices" element={<Practices />} />
                <Route path="/legal" element={<Legal />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
