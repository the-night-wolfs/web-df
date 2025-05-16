import React from "react";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { useContent } from "./hooks/useContent";
import AboutHero from "./pages/about/sections/Hero";
import HomeHero from "./pages/home/sections/Hero";
import AboutLayout from "./pages/about/AboutLayout";
import HomeLayout from "./pages/home/HomeLayout";
import YouthLayout from "./pages/youthcorner/YouthLayout";
import YouthHero from "./pages/youthcorner/sections/Hero";
import DonateLayout from "./pages/donate/DonateLayout";
import ContactLayout from "./pages/contact/ContactLayout";
import ContactHero from "./pages/contact/sections/Hero";
const Layout = ({ page }) => {
  const { state } = useContent();
  const pages = {
    about: <AboutLayout state={state} />,
    home: <HomeLayout state={state} />,
    youthcorner: <YouthLayout state={state} />,
    donate: <DonateLayout />,
    contact: <ContactLayout />,
  };
  const heroes = {
    about: <AboutHero />,
    home: <HomeHero />,
    youthcorner: <YouthHero />,
    contact: <ContactHero />,
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
