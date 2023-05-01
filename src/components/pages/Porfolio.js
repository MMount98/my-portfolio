import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "../protfolio";

import beta from "../images/beta.png";
import forcast from "../images/5-day-fetch-API.png"
import enCoded from "../images/enCoded.png"
import quiz from "../images/JavaScript Quiz.png"
import note from "../images/note taking.png"
import jate from "../images/Landing-page.png"

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [projects, setProject] = useState([
    {
      title: "Beta Tasters",
      desciption:
        "Allows a resturant to test new menu items and receive reviews from customers",
      tools: "MongoDB, HandleBars, Node.js, NodeMailer",
      id: 1,
      link: "https://secure-mesa-62807.herokuapp.com/",
      image: beta,
    },
    {
      title: "En-Coded",
      desciption:
        "Developed a job posting platform  designed specifically for the tech community, streamlining the job search process with an easy-to-use resume builder and job board",
      tools: "HTML, React.js, Tailwind CSS, DaisyUI, Yup, GraphQL, MongoDB, PWA, Heroku",
      id: 2,
      link: "https://bit.ly/3oLilFX",
      image: enCoded,
    },
    {
      title: "5-Day ForeCast",
      desciption:
        "Simple Web Application that calls to OpenWeather Api and displays the Next 5 day forcast Based off given city",
      tools: "HTML, Bootstrap, JavaScript, GitPages",
      id: 3,
      link: "https://mmount98.github.io/5-day-forecast/",
      image: forcast,
    },
    {
      title: "JavaScript",
      desciption:
        "Created a fun and interactive web application, similar to popular platforms like Quizlet and Kahoot!, that allows users to track their wins, losses, and current score",
      tools: "HTML, CSS, Javascript, GitPages",
      id: 4,
      link: "https://mmount98.github.io/Javascript_Quiz/",
      image: quiz,
    },
    {
      title: "Just Another Text Editor",
      desciption:
        "I have developed a cutting-edge web application that emulates a rudimentary JavaScript text editor and leverages the capabilities of Progressive Web Applications (PWAs) to enable users to seamlessly access the site's functionalities even when offline.",
      tools: "Express, PWA, IndexDB, Service Workers, Heroku",
      id: 5,
      link: "https://fast-meadow-68844.herokuapp.com/",
      image: jate,
    },
    {
      title: "Note Taker",
      desciption:
        "I have crafted a sophisticated web application that emulates a streamlined note-taking platform and employs pure JavaScript to store user-generated content.",
      tools: "JS, BootStrap, JSON, Heroku",
      id: 6,
      link: "https://tranquil-retreat-10835.herokuapp.com/",
      image: note,
    },
  ]);

  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        transition={{ delay: 1, type: "tween", duration: 1 }}
      >
        <h1 className="text-5xl text-center mt-3">Top 6 Projects</h1>
        <ProjectList projects={projects} />
      </motion.div>
    </>
  );
}
