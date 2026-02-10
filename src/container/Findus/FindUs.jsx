import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';
const FindUs = () => (
  <div className='App_BG App_Wrapper_Showroom Section_Padding' id='contact'>

    <div className='App_Wrapper_Showroom-Info'>
      <SubHeading title="Contact" />
      <h1 className='HeadText_Cormorant' style={{ marginBottom: '3rem' }}>Find us</h1>
      <div className='App_Wrapper_Showroom-Content'>
        <p className='P_Opensans'>Lamborghini dealer in Dubai, Sheikh Zayed Road</p>
        <p className='P_Cormorant' style={{ color: "#DCCA87", margin: '2rem 0' }}>Opening Hours</p>
        <p className='P_Opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='P_Opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='Custom_Button' style={{ marginTop: "2rem" }}>Visit Us</button>
    </div>

    <div className='App_Wrapper_Showroom_Img '>
      <img src={images.findus} alt="findus" />
    </div>

  </div>
);

export default FindUs;
