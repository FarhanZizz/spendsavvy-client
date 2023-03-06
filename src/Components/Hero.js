import React from "react";
import img from "../assets/pot.png";

const Hero = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="lg:max-w-lg md:max-w-md" alt="Pot" />
        <div>
          <h1 className="text-6xl font-bold">
            Get Savvy with <br /> your Spending!
          </h1>
          <p className="py-6">
            Your financial superhero, empowering you to effortlessly manage your
            expenses and achieve financial freedom. Join forces with SpendSavvy
            today and take control of your money!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
