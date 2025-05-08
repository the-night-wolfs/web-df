import React from "react";
// import Homeheader from "../components/home/Layout";
// import Homemain from "../components/home/HomeLayout";
import Footer from "../components/ui/Footer";
import { useContent } from "../hooks/useContent";

const Home = () => {
  const { state } = useContent(); // Destructure state instead of content
  console.log(state);
  return (
    <>
      <Homeheader />

      <Footer />
    </>
  );
};

export default Home;
