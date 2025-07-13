import React from "react";
import ProjectCard from "@/components/ProjectsCard";

function Projects() {
  return (
    <div className="flex flex-col container mx-auto px-4 py-8 items-center align-center">
      <h1 className="text-5xl font-bold ">
        My <span className="text-purple-500">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 place-items-center">
        <ProjectCard
          title="Portfolio Website"
          techs={["Next.js", "Tailwind CSS", "TypeScript"]}
          imageSrc="/React_js.jpeg"
          description="A personal portfolio website showcasing my projects and skills."
          githubUrl="/projects/portfolio"
          liveUrl="/"
        />
        <ProjectCard
          title="Portfolio Website"
          techs={["Next.js", "Tailwind CSS", "TypeScript"]}
          imageSrc="/React_js.jpeg"
          description="A personal portfolio website showcasing my projects and skills."
          githubUrl="/projects/portfolio"
          liveUrl="/"
        />
        <ProjectCard
          title="Portfolio Website"
          techs={["Next.js", "Tailwind CSS", "TypeScript"]}
          imageSrc="/React_js.jpeg"
          description="A personal portfolio website showcasing my projects and skills."
          githubUrl="/projects/portfolio"
          liveUrl="/"
        />
        <ProjectCard
          title="Portfolio Website"
          techs={["Next.js", "Tailwind CSS", "TypeScript"]}
          imageSrc="/React_js.jpeg"
          description="A personal portfolio website showcasing my projects and skills."
          githubUrl="/projects/portfolio"
          liveUrl="/"
        />
      </div>
    </div>
  );
}

export default Projects;
