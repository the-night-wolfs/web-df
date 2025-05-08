import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/customScript.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default About;
