import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Hide the toast after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowToast(false);
      setErrorMessage("");
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [showToast, errorMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        e.target.reset();
        setShowToast(true);
      },
      (error) => {
        setErrorMessage("Error Occured Try Again :(");
      }
    );
  };
  return (
    <section className="my-20  grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="">
        <h1 className="text-5xl font-bold mb-5">Contact us</h1>
        <p className="text-xl">
          Got a question? Need some help? Want to tell me a joke? Go ahead, I'm
          all ears!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="NAME"
          className="rounded-none bg-transparent  focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-5"
          type="text"
          name="user_name"
          required
        />
        <input
          placeholder="EMAIL"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-5"
          type="email"
          name="user_email"
          required
        />
        <textarea
          name="message"
          className="rounded-none textarea textarea-ghost bg-transparent focus:outline-0 border-0 border-b-2 border-b-primary w-full my-5"
          placeholder="MESSAGE"
          required
        ></textarea>
        <div className="flex justify-end">
          <button className="btn btn-primary" value="Send" type="submit">
            Send Message
          </button>
        </div>
      </form>
      {showToast && (
        <div className="toast toast-end">
          {errorMessage ? (
            <div className="alert rounded-none bg-red-500 text-white">
              <div>
                <span>{errorMessage}</span>
              </div>
            </div>
          ) : (
            <div className="alert rounded-none ">
              <div>
                <span className="font-semibold">
                  Message sent successfully :D
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Contact;
