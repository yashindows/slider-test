import React, { useEffect, useState } from "react"
import db from "./firebase"
import { collection, onSnapshot } from "firebase/firestore"

function Slider() {
  const [images, setImages] = useState([{ url: "loading.gif" }])

  useEffect(() => {
    onSnapshot(collection(db, "images"), (snapshot) => {
      setImages(snapshot.docs.map((doc) => ({ ...doc.data() })))
    })
  }, [])

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
          backgroundImage: `url(${images[currentSlide].url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "cover",
          filter: "blur(3px)",
        }}
      ></div>
      <button onClick={goPrevSlide}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <img src={images[currentSlide].url} alt="" />
      <button onClick={goNextSlide}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Slider
