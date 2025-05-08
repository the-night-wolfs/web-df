import { useRef } from "react";
import React from "react";
const BackToTop = () => {
  const backToTop = useRef(null);
  window.addEventListener("scroll", () => {
    backToTop.current.classList.toggle("active", window.scrollY > 200);
  });
  return (
    <div className="back-to-top" id="backToTop" ref={backToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default React.memo(BackToTop);
