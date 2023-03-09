import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/pot.png";

const Hero = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="tooltip tooltip-bottom"
          data-tip="pexels.com/@scottwebb"
        >
          <img src={img} className="lg:max-w-lg md:max-w-md" alt="Pot" />
        </div>
        <div>
          <h1 className="text-6xl font-bold">Get Savvy with your Spending!</h1>
          <p className="py-6">
            Your financial superhero, empowering you to effortlessly manage your
            expenses and achieve financial freedom. Join forces with SpendSavvy
            today and take control of your money!
          </p>
          <Link to="/" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
