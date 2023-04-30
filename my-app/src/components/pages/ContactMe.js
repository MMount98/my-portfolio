import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input, Textarea, Button } from "react-daisyui";

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
      <div className="grid grid-cols-1 ">
        <div className="card w-full bg-base-100 shadow-xl p-8 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-4 rounded-lg shadow bg-base-200">
              <div className="text-center">
                <div className="flex bg-base-300 h-10 rounded-t-lg mb-1">
                  <div className="rounded-full h-3 w-3 bg-red-600 mt-3 mx-1"></div>
                  <div className="rounded-full h-3 w-3 bg-yellow-400 mt-3 mx-1"></div>
                  <div className="rounded-full h-3 w-3 bg-lime-600 mt-3 mx-1"></div>
                </div>
                
                <h2 className="text-2xl font-bold">Reach Out!</h2>
                <p className="text-lg">Send Me a Message!</p>
              </div>
              <div className="grid grid-cols-2 ">
                <div className="mt-4">
                  <label className="block mb-2 font-bold">Your Name</label>
                  <Input
                    name="from_name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-10 w-72 text-xl pl-2 rounded shadow-xl"
                  />

                  <label className="block mt-4 mb-2 font-bold">
                    Your Email
                  </label>
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 w-72 text-xl pl-2 rounded shadow-xl"
                  />

                  <label className="block mt-4 mb-2 font-bold">
                    What Can I help you with?
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full rounded shadow-xl"
                  />

                  <div className="mt-6">
                    {isSubmitting ? (
                      <Button disabled>Loading...</Button>
                    ) : (
                      <Button
                        className="btn btn-outline rounded-3xl"
                        type="submit"
                        size="lg"
                      >
                        Send
                      </Button>
                    )}
                  </div>
                </div>

                {isSuccess && (
                  <div className="toast toast-top toast-end">
                    <div className="alert alert-success">
                      <div>
                        <span>Thank You for Reaching out!</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
