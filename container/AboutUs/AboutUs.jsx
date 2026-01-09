import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='App_AboutUs App_BG Flex_Center Section_Padding' id='about'>
    <div className='App_AboutUs-Overlay Flex-Center'>
      <img src={images.LamboText} alt="NotFound" />
    </div>

    <div className='App_AboutUs-Content Flex_Center'>
      <div className='App_AboutUs-Content-About'>
        <h1 className='HeadText_Cormorant'>About Us</h1>
        {/* <img src={images.Small2} alt="Small2" className='Small2_Img' /> */}
        <p className='P_Opensans'>Born from innovation and forged in performance, Lamborghini stands as the symbol of ultimate driving freedom and prestige.</p>
        <b type="button" className='Custom_Button'>Know more</b>
      </div>

      <div className='App_AboutUs-Content_Car Flex_Center'>
        <img src={images.Rev} alt="" />
      </div>

      <div className='App_AboutUs-Content-History'>
        <h1 className='HeadText_Cormorant'>Our History</h1>
        {/* <img src={images.Small3} alt="Small3" className='Small3_Img' /> */}
        <p className='P_Opensans'>Founded on a vision of defying limits, Lamborghini began as a bold challenge to the ordinary and evolved into a global symbol of performance and design.</p>
        <b type="button" className='Custom_Button'>Know more</b>
      </div>
    </div>
  </div>
);

export default AboutUs;
