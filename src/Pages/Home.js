import React from "react";
import About from "../Components/About";
import Faq from "../Components/Faq";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Pricing></Pricing>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
