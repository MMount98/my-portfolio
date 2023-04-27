import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AboutPhoto from "../images/AboutMe.jpg";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div className="relative">
        <img
          className="w-full h-5/6 object-cover rounded-md "
          src={AboutPhoto}
          alt="Michael Mount Headshot"
          style={{
            boxShadow: "5px 5px 0.5px rgba(255,255,255, 0.5)"
          }}
        />
      </div>
      <div>
        
          <div className="relative ml-5">
            <h1 className="text-5xl font-bold">I am</h1>
            <TypeAnimation
              className="text-5xl font-bold"
              sequence={[
                "a Full-Stack Web Developer",
                2000,
                "a Back-End Developer",
                2000,
                "a JS Developer",
                2000,
                "a Photographer",
                2000,
                "an Actor",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
       
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold my-8 text-center">About Me</h1>
          <p className="text-xl leading-8 mb-8">
            Hello, my name is Michael Mount! I am a current Denver University
            student enrolled in their full-stack flex program. It is a
            13-week-long course that covers what it means to be a full-stack
            engineer in the industry. I started my coding journey 2 months prior
            to starting the program. I have been self-teaching with a focus on
            HTML, CSS, and Javascript. Prior to joining DU, I attended the
            University of Northern Colorado and completed my bachelor's degree
            in Performing Arts and Theatre Studies. I was on the Dean's List for
            3 years and graduated with an overall GPA of 3.8. Once I finish with
            my courses, I intend to join the web development industry with high
            hopes to start a new career in life. Hoping to join a team and work
            with fellow developers in building a new project!
          </p>
        </div>
      </div>
    </div>
  );
}
