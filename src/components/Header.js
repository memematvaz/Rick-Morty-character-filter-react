import React from 'react';
import header from '../icons/header.jpg';

const Header = () => {
    return (
      <h1 className="header-container">
        <img src={header} alt="Rick and Morty" className="header-image"/>     
      </h1>
    )
}
  
export default Header;
  