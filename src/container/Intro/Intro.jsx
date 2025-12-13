import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { collection } from '../../constants';
import './Intro.css';

const Intro = () => {

  const [PlayVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if (PlayVideo) {
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }

  return (
    <div className='App_Video'>
      <video src={collection} ref={vidRef} typeof='video/mp4' loop controls={false} ></video>

      <div className='App_Video-Overlay Flex_Center'>
        <div className='App_Video-Overlay_Circle Flex_Center' onClick={handleVideo}>
          {PlayVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>

    </div>


  )
}

export default Intro;
