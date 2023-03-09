import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/login-hero.png";
import { BsGoogle } from "react-icons/bs";
const Login = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="tooltip tooltip-bottom" data-tip="Made by Midjouney AI">
        <img src={img} alt="hero" />
      </div>
      <form className="md:w-4/5 mx-auto">
        <h1 className="text-3xl font-bold mb-5 ">Welcome Back</h1>
        <h1 className="text-sm ">You've been missed!</h1>
        <input
          placeholder="EMAIL"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="email"
          name="email"
          required
        />
        <input
          placeholder="PASSWORD"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="password"
          name="password"
          required
        />
        <div className="flex justify-between items-center">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-xs rounded-none"
            />
            <span className="label-text ml-2">Remember me</span>
          </label>
          <Link className=" link link-primary text-sm" to="/password-reset">
            Forgot Password
          </Link>
        </div>

        <button
          className="btn btn-primary w-full mt-4"
          value="Send"
          type="submit"
        >
          Sign in
        </button>
        <div className="divider">OR</div>
        <button className="btn bg-base-100 hover:bg-base-100 text-primary  w-full">
          <BsGoogle className="mr-2"></BsGoogle>Sign in with Google
        </button>
        <p className="mt-4 ">
          Don't have an account?{" "}
          <Link className="link link-primary" to="/signup">
            Sign up
          </Link>{" "}
        </p>
      </form>
    </section>
  );
};

export default Login;
