import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navbar">
    <ul>
    <li className='navbar-BankBName'><Link to="/">National Bank of Coded</Link></li>
    </ul>
    <div className="navbar">
    <ul className='navbar-RightPages'>
      
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Transactions">Transactions</Link></li>
        <li><Link to="/Users">Users</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
      </div>
    </div>
  );
}

export default NavigationBar;

