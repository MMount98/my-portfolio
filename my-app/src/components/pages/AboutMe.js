import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AboutPhoto from "../images/IMG_1448.png";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center m-6">
        <div className="relative ml-5 self-start">
          <TypeAnimation
            className="text-5xl font-bold"
            sequence={[
              "Full-Stack Web Developer",
              2000,
              "Back-End Developer",
              2000,
              "JS Developer",
              2000,
              "Photographer",
              2000,
              "Actor",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center m-14">
        <div className="relative">
          <img
            className="w-96 h-96 rounded-full shadow-lg shadow-white"
            src={AboutPhoto}
            alt="Michael Mount Headshot"
          />
        </div>
      </div>
    </>
  );
}
