import React from "react";
import "../ImageGallery.css";
import { gamyba } from "../Images";
const { useState } = React;

function Baldugamyba() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const imageCards = gamyba.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} />
  ));
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = gamyba.indexOf(imageToShow);
    if (currentIndex >= gamyba.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = gamyba[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = gamyba.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = gamyba[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className="gallery-container">
      <h3>Vienetinių baldų gamyba</h3>

      <div className="image-box">
        <div className="image-card-box">{imageCards}</div>
      </div>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Baldugamyba;
