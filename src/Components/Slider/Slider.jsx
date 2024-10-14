import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, );

  const slides = [
    { text: 'Content 1', imageUrl: 'https://png.pngtree.com/background/20210710/original/pngtree-tech-robot-hand-business-banner-picture-image_1021229.jpg' },
    { text: 'Content 3', imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/65382e8659f839aa811640c8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds' },
    { text: 'Content 3', imageUrl: 'https://previews.123rf.com/images/sdecoret/sdecoret1905/sdecoret190500673/123956697-white-humanoid-robot-on-blurred-background-creating-new-futuristic-energy-power-source-3d-rendering.jpg' },
    { text: 'Content 3', imageUrl: 'https://img.myloview.com/posters/future-world-digital-technology-android-robot-working-replace-human-3d-humanoid-cyborg-pointing-finger-programming-on-hud-interface-computer-screen-futuristic-background-700-265057292.jpg' },
    { text: 'Content 3', imageUrl: 'https://img.freepik.com/premium-photo/hand-working-with-technical-support-customer-service-business-technology-internet-ui_102957-505.jpg' },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container" >
      <button className="nav-button left" onClick={prevSlide}>
        &lt; Previous
      </button>
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        Next &gt;
      </button>
    </div>
  );
};

export default Slider;
