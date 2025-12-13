import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div>

    <p className='P_Cormorant'>{title}</p>
    {/* <img src={images.Small} alt="Small" className='Small_Img' style={{ marginTop: '1rem' }} /> */}
  </div>
);

export default SubHeading;
