import { useState } from "react";
import "./Gototop.css";

export default function Gototop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="Gototop">
      <div
        style={{  display: showScroll ? "inline" : "none" }}
        onClick={scrollTop}
        className="scrollTop"
      >
        <div className="icon">
          <img src="/images/icons/cd-top-arrow.svg"></img>
        </div>
      </div>
    </div>
  );
}
