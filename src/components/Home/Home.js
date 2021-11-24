import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Fd from "./Fd/Fd";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import History from "./History/History";
import HomeAbout from "./HomeAbout/HomeAbout";
import Menubar from "./Menubar/Menubar";
import NewsLetter from "./NewsLetter/NewsLetter";
import Services from "./Services/Services";
import SliderProject from "./SliderProject/SliderProject";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div>
        <Menubar />
        <Banner />
        <Feature />
        <HomeAbout />
        <Services />
        <Fd />
        <SliderProject />
        <History />
        <NewsLetter />
        <Footer />
      </div>
      <button style={{ border: "none" }} className={visible ? "gotoUp" : ""} onClick={scrollTop}>
        <i className="fas  fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Home;