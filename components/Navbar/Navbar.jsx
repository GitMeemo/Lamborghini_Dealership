import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images.js';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (<nav className='App_Navbar'>

    <div className='App_Navbar-Logo'>
      <img src={images.LamboDark} alt="Logo" />
    </div>

    <ul className='App_Navbar-Links'>
      <li className='P_Opensans'> <a href="#home">Home</a></li>
      <li className='P_Opensans'> <a href="#about">About</a></li>
      <li className='P_Opensans'> <a href="#featured">Featured Models</a></li>
      <li className='P_Opensans'> <a href="#gallery">Gallery</a></li>
      <li className='P_Opensans'> <a href="#contact">Contact Us</a></li>
      <li className='P_Opensans'> <a href="#subscribe">Subscribe</a></li>
    </ul>

    <div className='App_Navbar-login'>
      <a href="#login" className='P_Opensans'>Log In / Register</a>
    </div>

    <div className='App_Navbar-Smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
        <div className='App_Navbar-Smallscreen_Overlay Flex-Center Slide-Bottom'>

          <a onClick={() => setToggleMenu(false)}> <img src={images.LamboWhite} alt="" /></a>

          {/* <MdOutlineLamboMenu fontSize={27} className='Overlay_Close' onClick={() => setToggleMenu(false)} /> */}

          <ul className='App_Navbar-Smallscreen_Links'>
            <li ><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li ><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li ><a href="#featured" onClick={() => setToggleMenu(false)}>Featured</a></li>
            <li ><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
            <li ><a href="#contact" onClick={() => setToggleMenu(false)}>Contact Us</a></li>
            <li ><a href="#subscribe" onClick={() => setToggleMenu(false)}>Subscribe</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>)

}
export default Navbar;
