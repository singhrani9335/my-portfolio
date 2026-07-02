import FadeUp from "@/components/ui/FadeUp";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container py-24">
      <FadeUp>

        {/* SECTION HEADER */}
        <div className="text-center mb-20 px-4">

          <p className="inline-block px-4 py-1 rounded-full bg-[#0F1B2D] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold uppercase tracking-[5px] text-xs">
            My Skills
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
            Frontend <span className="text-[#22D3EE]">Development</span> Skills
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-7 text-base md:text-lg">
            I work with modern frontend technologies to build responsive,
            fast and user-friendly web applications with clean UI and scalable
            architecture.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4 lg:px-10">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                p-6
                rounded-2xl
                bg-[#0F1B2D]/60
                border border-[#1E2A3B]
                hover:border-[#22D3EE]/50
                hover:-translate-y-2
                transition-all duration-300
                shadow-lg
              "
            >

              {/* ICON */}
              <div
                className="text-3xl mb-4 transition group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* NAME + LEVEL */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-semibold">
                  {skill.name}
                </h3>

                <span className="text-xs text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="h-2 bg-[#1E2A3B] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#22D3EE] via-[#3b82f6] to-[#a855f7]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </FadeUp>
    </section>
  );
}