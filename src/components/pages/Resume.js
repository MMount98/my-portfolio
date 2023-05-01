import { useEffect } from "react";
import resume from "../file.js/MichaelMount Resume.pdf";
import { motion } from "framer-motion";

export default function Resume() {
  useEffect(() => {
    document.title = "My Resume";
  }, []);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ delay: 1, type: "tween", duration: 1 }}
    >
      <div className="container mx-auto p-4 bg-">
        <a href={resume} download>
          <button className="btn btn-outline btn-primary mb-3">
            Download PDF
          </button>
        </a>
        <h1 className="text-4xl font-bold mb-4">Michael Mount</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2 md:text-sm">Advanced</h3>
                <ul className="list-disc ml-4">
                  <li className="mb-1 md:text-sm">HTML</li>
                  <li className="mb-1 md:text-sm">Javascript</li>
                  <li className="mb-1 md:text-sm">Node.js</li>
                  <li className="mb-1 md:text-sm">SQL</li>
                  <li className="mb-1 md:text-sm">Github</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-bold mb-2 md:text-sm">
                  Intermediate
                </h3>
                <ul className="list-disc ml-4">
                  <li className="mb-1 md:text-sm">React.js</li>
                  <li className="mb-1 md:text-sm">MongoDB</li>
                  <li className="mb-1 md:text-sm">GraphQL</li>
                  <li className="mb-1 md:text-sm">Tailwind CSS</li>
                  <li className="mb-1 md:text-sm">Bootstrap</li>
                  <li className="mb-1 md:text-sm">Heroku</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2 md:text-sm">Beginner</h3>
                <ul className="list-disc ml-4">
                  <li className="mb-1 md:text-sm">PWA</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Leadership Experience</h2>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-xl mb-2">
                Community Council President, Greeley, CO Aug 2019 - May 2020
              </h3>
              <ul className="list-disc ml-4">
                <li className="mb-2">
                  Spearheaded efforts to build a safe and inclusive community
                  for University of Northern Colorado (UNCO) students,
                  demonstrating strong communication and interpersonal skills
                </li>
                <li className="mb-2">
                  Led over 12 community-based projects, collaborating with a
                  diverse team to develop and execute initiatives that addressed
                  student needs, showcasing project management and
                  problem-solving abilities
                </li>
                <li className="mb-2">
                  Supervised and mentored a council of 10 team members,
                  providing guidance and support to ensure the successful
                  completion of projects, demonstrating effective leadership and
                  delegation skills
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-xl mb-2">
              University of Denver, Denver, CO - Certificate of Completion
            </h3>
            <ul className="list-disc ml-4">
              <li className="mb-2">Full-Stack Web Development</li>
              <li className="mb-2">
                3 month intensive course covering the key skills for front end
                and back end web development
              </li>
            </ul>
            <h3 className="font-bold text-xl mb-2">
              University of Northern Colorado, Greeley, CO - Bachelor of Arts -
              Theatre Studies
            </h3>
            <ul className="list-disc ml-4">
              <li className="mb-2">Dean’s List 2018-2020</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
