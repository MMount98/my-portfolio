import { useState } from "react";

export default function ProjectList(props) {
  const projects = props.projects;

  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-16">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-lg shadow-md overflow-hidden h-56"
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {hovered === project.id && (
            <div className="transition-opacity duration-300 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm mb-3 text-gray-300">
                  {project.desciption}
                </p>
                <p className="text-xs mb-3 text-gray-300">{project.tools}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-4 py-2 rounded-full mt-4 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                  Visit Site
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}