import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='App_NewsLetter' id='subscribe'>

    <div className='App_NewsLetter-Heading'>
      <SubHeading title="Newsletter" />
      <h1 className='HeadText_Cormorant'>Subscribe to Our Newsletter</h1>
      <p className='P_Opensans'>And never miss latest Updates!</p>
    </div>

    <div className='App_NewsLetter-Input Flex_Center'>
      <input type="email" placeholder="Enter your email address" />
      <button className='Custom_Button'>Subscribe</button>
    </div>

  </div>
);

export default Newsletter;