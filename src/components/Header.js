import React from 'react';
import header from '../icons/header.jpg';
import '../styles/layout/_header.scss';

const Header = () => {
    return (
      <div className="header-container">
        <img src={header} alt="Rick and Morty" className="header-image"/>
       
      </div>
    )
  }
  
  export default Header;
  