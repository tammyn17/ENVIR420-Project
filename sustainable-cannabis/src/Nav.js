import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const  Nav= () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/impact">Environmental Impact</Link></li>
                    <li><Link to="/practices">Sustainable Practices</Link></li>
                    <li><Link to="/legal">Legal & Economic Aspects</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
