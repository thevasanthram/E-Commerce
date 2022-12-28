import React from 'react';
import './../styles/NavBar.css';
import eCommerceLogo from './../images/eCommerce logo.png';
function NavBar() {
  return (
    <div className='navBarDivision'>
      <img src={eCommerceLogo} alt='logo' className='eCommerceLogo' />
      <input type='text' name='searchBarValue' className='searchBar' />
      <p className='navBarCart navBarItems'>Cart</p>
      <p className='navBarProfile navBarItems'>Profile</p>
    </div>
  );
}

export default NavBar;
