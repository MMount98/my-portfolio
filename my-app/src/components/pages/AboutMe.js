import { useEffect } from "react";
import AboutPhoto from "../images/AboutMe.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
      >
      
      </motion.div>
    </>
  );
}
