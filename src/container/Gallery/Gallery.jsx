import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'Left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="App_Gallery Flex_Center App_BG3" id='gallery'>
      <div className="App_Gallery-Content">
        <SubHeading title="Lamborghini" />
        <h1 className="HeadText_Cormorant">Photo Gallery</h1>
        <p className="P_Opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>A showcase of iconic machines crafted for unmatched performance.
Discover Lamborghini like you’ve never seen it before.</p>
        <button type="button" className="Custom_Button">View More</button>
      </div>
      <div className="App_Gallery-Images">
        <div className="App_Gallery-Images_Container" ref={scrollRef}>
          {[images.G1, images.G2, images.G3, images.G4, images.G5].map((image, index) => (
            <div className="App_Gallery-Images_Card Flex_Center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="Gallery_Image" />
              <BsInstagram className="Gallery_Image-Icon" />
            </div>
          ))}
        </div>
        <div className="App_Gallery-Images_Arrows">
          <BsArrowLeftShort className="Gallery_Arrow-Icon" onClick={() => scroll('Left')} />
          <BsArrowRightShort className="Gallery_Arrow-Icon" onClick={() => scroll('Right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;