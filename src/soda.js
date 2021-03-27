import React from 'react';
import { Link } from "react-router-dom";
import sodaImg from './Soda.png';
import './App.css';


function Soda() {
    
    return (
        <div
        className="soda"
        style={{ backgroundImage: `url(${sodaImg})` }}>
            <h1>
                <Link to='/'>Go Home</Link>
            </h1>

        </div>
    )
}

export default Soda;