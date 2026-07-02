import FadeUp from "@/components/ui/FadeUp";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-24">

      <FadeUp>

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-14 px-3 sm:px-4">

          <p className="inline-block px-4 sm:px-5 py-1.5 rounded-full bg-[#0F1B2D] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs">
            My Projects
          </p>

          <h2 className="mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Featured <span className="text-[#22D3EE]">Work</span>
          </h2>

          <p className="mt-4 md:mt-5 text-gray-400 max-w-2xl mx-auto leading-6 md:leading-7 text-sm sm:text-base md:text-lg">
            Real-world projects built with modern technologies and clean UI focus.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-[25px] px-3 sm:px-4 lg:px-12">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                relative
                bg-[#0F1B2D]/60
                border border-[#1E2A3B]
                rounded-2xl
                overflow-hidden
                shadow-md

                hover:-translate-y-2
                hover:bg-[#12243a]/80
                hover:border-[#22D3EE]/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]

                transition-all
                duration-500
              "
            >

              {/* IMAGE / PLACEHOLDER */}
              <div className="relative h-[180px] sm:h-[200px] md:h-[212px] overflow-hidden">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />
                ) : (
                  <ProjectPlaceholder />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-5 sm:leading-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2 sm:px-3
                        py-1
                        text-[10px] sm:text-xs
                        rounded-full
                        bg-[#0F1B2D]
                        border border-[#1E2A3B]
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-3 sm:px-4
                      py-2 sm:py-2.5
                      rounded-xl
                      border border-[#1E2A3B]
                      text-gray-300
                      hover:border-[#22D3EE]
                      hover:text-[#22D3EE]
                      transition
                      text-xs sm:text-sm
                    "
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-3 sm:px-4
                      py-2 sm:py-2.5
                      rounded-xl
                      bg-[#22D3EE]
                      text-[#0B1220]
                      font-semibold
                      hover:opacity-90
                      transition
                      text-xs sm:text-sm
                    "
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </FadeUp>

    </section>
  );
}