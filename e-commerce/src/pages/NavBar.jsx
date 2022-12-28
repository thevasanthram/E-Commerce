import React from 'react';
import './../styles/NavBar.css';
import eCommerceLogo from './../images/eCommerce logo.png';
function NavBar() {
  return (
    <div className='navBarDivision'>
      <img src={eCommerceLogo} alt='logo' className='eCommerceLogo' />
      <input type='text' name='searchBarValue' className='searchBar' />
      <p className='navBarCart'>Cart</p>
      <p className='navBarProfile'>Profile</p>
    </div>
  );
}

export default NavBar;
