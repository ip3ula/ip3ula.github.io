import { useRef } from "react";

const Project = ({ name, description, photo, project, code }) => {
  return (
    <div id="projects" className="bg-cover bg-stone-950 p-8 rounded-4xl shadow-md w-[75vw] max-w-80 h-120 grid grid-rows-7 flex-shrink-0">
      <div
        className="bg-cover w-[55vw] max-w-60 h-40 border border-yellow-300 rounded row-span-3 mx-auto"
        style={{ backgroundImage: `url(/${photo})` }}
      ></div>

      <div className="row-span-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
      </div>

      <div className="flex justify-between row-span-1">
        <button
          onClick={() => window.open(project, "_blank")}
          className="bg-stone-800 text-white px-2 py-2 rounded-lg mt-4 w-[27vw] max-w-30 sm:text-xs text-sm hover:bg-yellow-300 hover:text-stone-950"
        >
          View Project
        </button>
        <button
          onClick={() => window.open(code, "_blank")}
          className="bg-stone-800 text-white px-2 py-2 rounded-lg mt-4 ml-4 w-[27vw] max-w-30 sm:text-xs text-sm hover:bg-yellow-300 hover:text-stone-950"
        >
          View Code
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

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
        <Project
          name="Tic Tac Toe Game"
          description="A simple Tic-Tac-Toe game where two players take turns, with win detection and a reset option."
          photo="tictactoe.png"
          project="https://ip3ula.github.io/tictactoe/"
          code="https://github.com/ip3ula/tictactoe"
        />
        <Project
          name="Calculator App"
          description="A simple and user-friendly calculator website for quick and accurate calculations."
          photo="calculator.png"
          project="https://ip3ula.github.io/Calculator/"
          code="https://github.com/ip3ula/Calculator"
        />
        <Project
          name="Blog App"
          description="A simple blog app where users can create, read, update, and delete blog posts."
          photo="blog.png"
          project=""
          code="https://github.com/ip3ula/blog"
        />
      </div>
    </div>
  );
};

export default Projects;
