import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input} from "react-daisyui";
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        transition={{ delay: 1, type: "tween", duration: 1 }}
      >
        <div className="grid grid-cols-1 ">
          <div className="card w-full bg-base-100 shadow-xl p-8 ">
            <div className="flex bg-base-300 h-10 rounded-t-lg ">
              <div className="rounded-full h-3 w-3 bg-red-600 mt-3 mx-1"></div>
              <div className="rounded-full h-3 w-3 bg-yellow-400 mt-3 mx-1"></div>
              <div className="rounded-full h-3 w-3 bg-lime-600 mt-3 mx-1"></div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className=" rounded-b-lg shadow bg-base-200">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Reach Out!</h2>
                  <p className="text-lg">Send Me a Message!</p>
                </div>
                <div className="place-items-center grid grid-cols-2 grid-rows-2 p-4">
                  <div class="mt-4 grid self-start">
                    <label className="block mb-2 font-bold">Your Name</label>
                    <Input
                      name="from_name"
                      type="text"
                      placeholder="Enter your name"
                      className="h-10 w-72 text-xl pl-2 rounded shadow-xl grid self-start"
                    />
                  </div>
                  <div className="grid self-start">
                    <label className="mt-4 mb-2 font-bold ">Your Email</label>
                    <Input
                      name="from_email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-10 w-72 text-xl pl-2 rounded shadow-xl"
                    />
                  </div>
                  <div>
                    <div class="self-center text-center">
                      <label className="mb-2 mt-4 block font-bold self-center">
                        What Can I help you with?
                      </label>
                      <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows={3}
                        className="col-span-2 self-center text-center text-xl rounded shadow-xl w-96"
                      />
                    </div>
                  </div>
                  <div class="mt-6">
                    {isSubmitting ? (
                      <button disabled>Loading...</button>
                    ) : (
                      <button
                        className="btn btn-outline rounded-3xl"
                        type="submit"
                        size="lg"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
