import React, { useState } from "react"

function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const goNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }
  const goPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length)
  }
  return (
    <div className="slider">
      <div
        className="slider-backdrop"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          background: `url(${images[currentSlide]}) center no-repeat`,
          backgroundAttachment: "cover",
          filter: "blur(3px)",
        }}
      ></div>
      <button onClick={goPrevSlide}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <img src={images[currentSlide]} alt="" />
      <button onClick={goNextSlide}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Slider
