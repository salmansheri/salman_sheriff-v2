import { projectsData } from "~/lib/data.ts";
import { ArrowBigRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Projects = () => {
  return (
    <section className="min-h-dvh py-20" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Selected works</h2>
        <div className="mt-10">
          {projectsData.map((project) => (
            <Link
              to="/projects/$projectId"
              params={{
                projectId: project.id.toString(),
              }}
              key={project.title}
              className="border-t py-6 border-dotted group/project  border-slate-400 w-full relative"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-slate-900" />
              <div className="">
                <div className="aspect-video md:hidden overflow-hidden">
                  <img alt={project.title} src={project.imageUrl} />
                </div>
                <div className="w-full mt-3 flex justify-between items-center md:grid md:grid-cols-3 md:justify-between md:gap-8">
                  <h3 className="text-2xl flex-1">{project.title}</h3>
                  <div className="relative flex-1">
                    <div className="absolute md:block hidden aspect-video overflow-hidden w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                      <img alt={project.title} src={project.imageUrl} />
                    </div>
                  </div>
                  <div className="size-6 overflow-hidden flex-1">
                    <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-all duration-500">
                      <ArrowBigRight />
                      <ArrowBigRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
