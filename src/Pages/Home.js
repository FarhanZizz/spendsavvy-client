import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Pricing></Pricing>
      <Faq></Faq>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
