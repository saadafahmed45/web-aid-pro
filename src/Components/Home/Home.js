import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import Team from "../Team/Team";
import { useState } from "react";
import { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import About from "../About/About";
import Wanted from "../Wanted/Wanted";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        {/* <Navbar></Navbar> */}
        <Header></Header>
        <About></About>
        <Service></Service>
        <Wanted></Wanted>
        <Team></Team>
        <Contact></Contact>
        <Footer></Footer>
        <ScrollToTop smooth />

      </div>
    </div>
  );
};

export default Home;
