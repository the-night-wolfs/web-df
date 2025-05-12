import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import DonateUs from "./pages/Donate";
import Contact from "./pages/Contact";
import OurWork from "./pages/Work";
import Navbar from "./components/ui/NavBar";
// import Donation from "../test/index"
import Footer from "./components/ui/Footer";
import Layout from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={"home"} />} />
        <Route path="/about" element={<Layout page={"about"} />} />
        <Route path="/donate" element={<Layout page={"donate"} />} />
        <Route path="/ourwork" element={<Layout page={"ourwork"} />} />
        <Route path="/contact" element={<Layout page={"contact"} />} />
        <Route path="/joinus" element={<Layout page={"joinus"} />} />
      </Routes>
    </>
  );
  // return <Donation />;
}
export default App;
