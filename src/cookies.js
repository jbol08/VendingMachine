import React from 'react';
import { Link } from "react-router-dom";
import cookiesImg from './cookie.png';
import './App.css';


function Cookies() {
    
    return (
        <div
        className="cookies"
        style={{ backgroundImage: `url(${cookiesImg})` }}>
            <h1>
                <Link to='/'>Go Home</Link>
            </h1>

        </div>
    )
}

export default Cookies;