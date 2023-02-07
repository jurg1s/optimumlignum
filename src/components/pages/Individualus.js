import React from "react";
import "../ImageGallery.css";
import { ind } from "../Images";
const { useState } = React;

function Individualus() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const imageCards = ind.map((image) => (
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
    let currentIndex = ind.indexOf(imageToShow);
    if (currentIndex >= ind.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = ind[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = ind.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = ind[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className="gallery-container">
      <h3>Individualūs</h3>

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

export default Individualus;
