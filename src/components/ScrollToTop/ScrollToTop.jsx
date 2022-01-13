import React, { useEffect, useState } from "react";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className="fas fa-arrow-circle-up fa-3x"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
