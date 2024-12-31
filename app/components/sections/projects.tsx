import { projectsData } from "~/lib/data.ts";
import { ArrowBigRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="min-h-dvh">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Selected works</h2>
        <div className="mt-10">
          {projectsData.map((project) => (
            <a href="#" key={project.title}>
              <div className="border-t py-6 border-dotted  border-slate-400 w-full">
                <div className="aspect-video md:hidden overflow-hidden">
                  <img alt={project.title} src={project.imageUrl} />
                </div>
                <div className="w-full mt-3 flex justify-between items-center">
                  <h3 className="text-2xl ">{project.title}</h3>
                  <ArrowBigRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
