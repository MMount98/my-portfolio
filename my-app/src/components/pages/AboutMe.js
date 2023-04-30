import { useEffect } from "react";
import AboutPhoto from "../images/AboutMe.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 2 }}
      className="bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto py-8 md:py-12 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <img
            className="w-full rounded-lg shadow-xl"
            src={AboutPhoto}
            alt="Michael Mount"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            Hello, my name is Michael Mount, and I am a passionate Junior Web
            Developer seeking new opportunities to showcase my skills and
            expertise. I recently graduated from the Full-Stack Web Development
            Program at Denver University, where I acquired comprehensive
            knowledge of web development frameworks, databases, and programming
            languages.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            With a focus on the MERN stack, I have developed a solid foundation
            in MongoDB, Express.js, React.js, and Node.js. Through my coursework
            and projects, I have honed my problem-solving and critical thinking
            skills, and I am confident in my ability to contribute to any web
            development team.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            Prior to my web development journey, I earned a Bachelor's degree in
            Performing Arts and Theatre Studies at the University of Northern
            Colorado, where I consistently received Dean's List honors for three
            years and graduated with an overall GPA of 3.8. My theatrical
            background has helped me to develop strong communication and
            interpersonal skills that I believe are essential for success in any
            field, including web development.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            I am always eager to learn and explore new ideas, and I am confident
            that my passion for web development will help me to excel in any
            role. I am committed to creating exceptional user experiences, and I
            am excited to work with a dynamic and innovative team to bring new
            and exciting projects to life.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Thank you for considering my application, and I look forward to the
            opportunity to contribute my skills and enthusiasm to your
            organization.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
