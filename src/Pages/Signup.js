import React, { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import img from "../assets/signup-hero.png";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { singUpWithEmailPassword, updateUser, googleLogin } =
    useContext(AuthContext);

  const handleEmailPasswordSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    try {
      // Send user data to backend to add to database
      const response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        const errorResponse = await response.json(); // parse the response body as JSON
        const errorMessage = errorResponse.message; // extract the error message
        throw new Error(errorMessage); // throw the error with the extracted message
      }

      // Call signup function to register user with email and password
      await singUpWithEmailPassword(email, password);

      // Call update function to set user display name
      await updateUser({ displayName: name });

      // Reset form and navigate to home page on success
      form.reset();
      setError("");
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  const handleGoogle = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      const newUser = {
        email: user.email,
        name: user.displayName,
      };
      const response = await fetch("http://localhost:5000/googleregistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Reset form and navigate to home page on success
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 gap-20  items-center
    mt-10 lg:mt-0 py-10"
    >
      <div
        className="tooltip tooltip-bottom hidden lg:block"
        data-tip="Made by Midjouney AI"
      >
        <img src={img} alt="hero" />
      </div>
      <div className="md:w-4/5 mx-auto">
        <form onSubmit={handleEmailPasswordSignUp}>
          <h1 className="text-3xl font-bold mb-5 ">Join us today!</h1>
          {error ? (
            <h1 className="text-sm text-error">{error}</h1>
          ) : (
            <h1 className="text-sm">
              Become one of the cool kids on the block.
            </h1>
          )}
          <input
            placeholder="NAME"
            className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
            type="text"
            name="name"
            required
          />
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
          <button
            className="btn btn-primary w-full mt-4"
            value="Send"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogle}
          className="btn bg-base-100 hover:bg-base-100 text-primary  w-full"
        >
          <BsGoogle className="mr-2"></BsGoogle>Sign in with Google
        </button>
        <p className="mt-4 ">
          Already have an account?{" "}
          <Link className="link link-primary" to="/login">
            Log In
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Signup;
