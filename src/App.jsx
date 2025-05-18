import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/globel.css";
import Test from "../tests/Test";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // Distance to trigger animation (can reduce if causing overflow)
      duration: 400, // Animation duration
      easing: "ease", // Easing function
      once: true, // Animate only once (set to true to avoid repeated anims)
      anchorPlacement: "top-bottom", // Trigger position
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={"home"} />} />
        <Route path="/about" element={<Layout page={"about"} />} />
        <Route path="/donate" element={<Layout page={"donate"} />} />
        <Route path="/contact" element={<Layout page={"contact"} />} />
        <Route path="/youthCorner" element={<Layout page={"youthcorner"} />} />
        <Route path="/programs" element={<Layout page={"programs"} />} />
      </Routes>
    </>
  );
  // return <Test />;
}
export default App;
