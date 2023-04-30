import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import landingPhoto from "../images/IMG_1448.png";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "Michael Mount";
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0, transition: { duration: .5 } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <div className="grid grid-cols-1 place-items-center m-6">
          <div className="relative ml-5 self-start">
            {setTimeout}
            <TypeAnimation
              className="text-2xl md:text-5xl font-bold "
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
              className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-lg shadow-white"
              src={landingPhoto}
              alt="Michael Mount Headshot"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
