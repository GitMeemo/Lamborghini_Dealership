import React from 'react';
import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='App_Header App_BG3 App_Wrapper Section_Padding' id='#home'>

    <div className='App_Wrapper_Info '>
      <SubHeading title="Chase The New Thrill" />
      <h1 className='App_Header-H1'> The Key To Pure Performance</h1>
      <p className='P_Opensans' style={{ margin: '2rem 0', paddingRight: '3rem' }}>Experience the perfect fusion of power, precision, and iconic design. Every curve engineered for dominance. Every detail built for adrenaline. Step into a world where speed meets luxury, and innovation knows no limits.</p>
      <button type='button' className='Custom_Button'><a href="#featured">Explore Models</a></button>
    </div>

    <div className='App_Wrapper_Img'>
      <img src={images.Wellcome} alt="NoImage" />
    </div>

  </div>
);

export default Header;
