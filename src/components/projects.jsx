import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Project = ({ name, description, photo, project, code }) => {
  return (
    <div id="projects" className="bg-cover bg-stone-950 p-8 rounded-4xl shadow-md w-[75vw] max-w-80 h-120 grid grid-rows-7 flex-shrink-0 group">
      <div
        className="bg-cover w-[55vw] max-w-60 h-40 border border-yellow-300 rounded row-span-3 mx-auto group-hover:scale-110 transition-transform duration-300" 
        style={{ backgroundImage: `url(${photo})` }}
      ></div>

      <div className="row-span-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
      </div>

      <div className={`flex  ${project? "justify-between" : "justify-center"} row-span-1`}>
        <button 
          onClick={() => window.open(project, "_blank")}
          className={`bg-stone-800 text-white px-2 py-2 rounded-lg mt-4 w-[60%]  sm:text-xs text-sm hover:bg-yellow-300 hover:text-stone-950 ${project ? "max-w-30" : "hidden"}`}
        >
          View Project
        </button>
        <button
          onClick={() => window.open(code, "_blank")}
          className={`bg-stone-800 text-white px-2 py-2 rounded-lg mt-4 ml-4 w-[60%]  sm:text-xs text-sm hover:bg-yellow-300 hover:text-stone-950 ${project ? "max-w-30" : "w-full mr-4"}`}
        >
          View Code
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axios.get("https://api.github.com/users/ip3ula/repos")
      return response.data
    }})

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  
      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  if(projectsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-yellow-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1.5h11a2.5 2.5 0 1 1-11 0z"
          ></path>
        </svg>
      </div>
    );
  }
  
  const projects = projectsQuery.data.filter(project => !project.name.includes('course') && !project.name.includes('full-stack-open')).sort((a,b) => b.stargazers_count - a.stargazers_count) || [];

  return (
    <div className="p-8 pt-13 relative">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>Here are some of the projects I have worked on.</p>
      <button
        onClick={scrollRight}
        className="size-10 absolute right-5 bg-yellow-300 rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 mt-15 text-white overflow-x-auto scroll-smooth"
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            photo={`https://raw.githubusercontent.com/ip3ula/${project.name}/main/public/screenshot.png`}
            project={project.homepage}
            code={project.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
