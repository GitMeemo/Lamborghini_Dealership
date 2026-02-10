import React from 'react'
import './FeaturedModels.css';
import { useState } from 'react';
import { images} from '../../constants';

const FeaturedModels = () => {

  const [current, setCurrent] = useState(0);
  const slides = [
    {
      img: images.slide1,
      name: "Revuelto",
      power: "736 kW",
      speed: "350 km/h",
      zeroToHundred: "2.5s"
    },
    {
      img: images.slide2,
      name: "Temarario",
      power: "470 kW",
      speed: "325 km/h",
      zeroToHundred: "2.9s"
    },
    {
      img: images.slide3,
      name: "Urus",
      power: "490 kW",
      speed: "306 km/h",
      zeroToHundred: "3.3s"
    },
    {
      img: images.slide4,
      name: "Huracan",
      power: "566 kW",
      speed: "351 km/h",
      zeroToHundred: "2.8s"
    },
    {
      img: images.slide5,
      name: "Huracan",
      power: "412 kW",
      speed: "325 km/h",
      zeroToHundred: "3.7s"
    },
    {
      img: images.slide6,
      name: "Sián",
      power: "602 kW",
      speed: "350 km/h",
      zeroToHundred: "2.8s"
    }
  ];

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="App_Slider-Container  App_BG " id='featured'>
      <img src={images.LamboWhite} alt="White Logo" className="App_Brand-Logo" />
      <h1 className="App_Slide-Title HeadText_Cormorant Flex_Center">Featured Models</h1>

      {/* ARROWS */}
      <div className="App_Arrow App_Left-Arrow Custom_Button" onClick={prevSlide}>〈</div>
      <div className="App_Arrow App_Right-Arrow Custom_Button" onClick={nextSlide}>〉</div>

      {/* MODEL NAME */}
      <h2 className="App_ModelName">{slides[current].name}</h2>

      {/* MAIN SLIDE */}
      <div className="App_Slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`App_Slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.img} className="App_Center-Car" alt="car" />
          </div>
        ))}
      </div>

      {/* SPECS BELOW CAR */}
      <div className="App_Specs-Container">
        <div className="App_Spec-Box">
          <p className="App_Spec-Title">Max Power (kW)</p>
          <p className="App_Spec-Value">{slides[current].power}</p>
        </div>

        <div className="App_Spec-Box">
          <p className="App_Spec-Title">Max Speed</p>
          <p className="App_Spec-Value">{slides[current].speed}</p>
        </div>

        <div className="App_Spec-Box">
          <p className="App_Spec-Title">0 - 100 km/h</p>
          <p className="App_Spec-Value">{slides[current].zeroToHundred}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedModels