import React from "react";
import AboutHero from "./components/about/sections/Hero";
import HomeHero from "./components/home/sections/Hero";
import AboutLayout from "./components/about/AboutLayout";
import HomeLayout from "./components/home/HomeLayout";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
const Layout = ({ page }) => {
  const pages = {
    about: <AboutLayout />,
    home: <HomeLayout />,
    // about:<AboutLayout/>,
  };
  const heroes = {
    about: <AboutHero />,
    home: <HomeHero />,
  };
  return (
    <>
      <header>
        <NavBar />
        {heroes[page] || ""}
      </header>
      <main>{pages[page] || <div>page not found</div>}</main>
      <Footer />
    </>
  );
};

export default Layout;
