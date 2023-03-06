import React from "react";
import img from "../assets/DP.png";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} alt="Developer" className="lg:max-w-lg md:max-w-md" />
          <div>
            <h1 className="text-5xl font-bold">About us</h1>
            <p className="py-6">
              Welcome to our expense tracker website! We're a team of one, but
              don't worry, that just means we're the ultimate multitasker. Our
              founder is so skilled at balancing expenses, they can juggle
              numbers and receipts with one hand tied behind their back (please
              don't ask us to demonstrate that).
              <br />
              <br />
              We may be small, but we're mighty. Our motto is "keeping your
              finances in check, while also keeping it fun." We believe that
              tracking your expenses should be as enjoyable as finally finding
              the last puzzle piece you've been searching for (you know the
              feeling).
              <br />
              <br />
              So, whether you're a budgeting pro or just trying to figure out
              where all your money is going, we've got you covered. And hey,
              with a team this small, you know you're getting personalized
              attention (we may even remember your name).
              <br />
              <br />
              Thanks for choosing us to help you conquer your finances. Let's
              make tracking expenses the highlight of your day (we're working on
              making that sound less sad).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
