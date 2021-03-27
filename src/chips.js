import React from 'react';
import { Link } from "react-router-dom";
import chipsImg from './funyuns.png';
import './App.css';


function Chips() {
    
    return (
        <div
        className="chips"
        style={{ backgroundImage: `url(${chipsImg})` }}>
            <h1>
                <Link to='/'>Go Home</Link>
            </h1>

        </div>
    )
}

export default Chips;