import { useRef } from "react";
import React from "react";
import { iconMap } from "../../hooks/iconmap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BackToTop = () => {
  const backToTop = useRef(null);
  window.addEventListener("scroll", () => {
    backToTop.current.classList.toggle("active", window.scrollY > 200);
  });
  return (
    <div className="back-to-top" id="backToTop" ref={backToTop}>
      <FontAwesomeIcon icon={iconMap["arrowup"]} />
    </div>
  );
};

export default React.memo(BackToTop);
