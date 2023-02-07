import React from "react";
import "../ImageGallery.css";
import { images } from "../Images";
const { useState } = React;

function Baldurestauravimas() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const imageCards = images.map((image) => (
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
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className="gallery-container">
      <h3>Restauruoti baldai</h3>

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

export default Baldurestauravimas;
