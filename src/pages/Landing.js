import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import BrandOne from "../components/brand";
import WhyChooseUs from "../components/whyChooseUs";
import AboutStyleOne from "../components/about-style-one";
import AboutStyleTwo from "../components/about-style-two";
import Team from "../components/team";
import Skill from "../components/skill";
import PortfolioONe from "../components/portfolio";
import Cta from "../components/cta";
import Footer from "../components/footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <BrandOne /> */}
      <WhyChooseUs />
      <AboutStyleOne />
      <AboutStyleTwo />
      <Team />
      <Skill />
      <PortfolioONe />
      <Cta />
      <Footer />
    </>
  );
};

export default Landing;
