import React from 'react';
import { Link } from "react-router-dom";
import vendingMachineImg from "./vendingmachine.png";
import './App.css';


function VendingMachine() {
   
  
    return (        
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      
        <h1>hello i am a vending machine. what would you like to eat?</h1>    
        <h1><Link to="/cookies">cookies</Link></h1>
        <h1><Link to="/chips">chips</Link></h1>
        <h1><Link to="/soda">soda</Link></h1>
      
    </div>
    );
    
}
  
export default VendingMachine;
  