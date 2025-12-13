import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='App_Footer Section_Padding App_BG3'>
    <FooterOverlay />
    <Newsletter />

    <div className='App_Footer-Links'>

      <div className='App_Footer-Links_Contact'>

        <h1 className='App_Footer-HeadText'>Contact Us</h1>
        <p className='P_Opensans'>Sheikh Zayed Road, Dubai</p>
        <p className='P_Opensans'>+92 309-7482142</p>
        <p className='P_Opensans'>+92 309-7482142</p>
      </div>

      <div className='App_Footer-Links_Logo'>

        <img src={images.LamboTextWhite} alt="Logo" />

        {/* <p className='P_Opensans'>“You don’t discover Lamborghini by standing still — you discover it by pushing beyond every limit.</p> */}

        <div className='App_Footer-Links_Icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>

      </div>

      <div className='App_Footer-Links_Work'>

        <h1 className='App_Footer-HeadText'>Working Hours</h1>

        <p className='P_Opensans'>Monday-Friday</p>
        <p className='P_Opensans'>08:00 am -12:00 am</p>
        <p className='P_Opensans'>Saturday-Sunday:</p>
        <p className='P_Opensans'>07:00am -11:00 pm</p>
      </div>

    </div>

    <div className='Footer_Copyright'>
      <p className='P_Opensans'>2025 Lamborghini. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
