const experiences = [
  {
    year: "2026",
    title: "Real Projects",
    description:
      "Created Admin Dashboard, Portfolio Website and E-commerce UI projects.",
  },
  {
    year: "2026",
    title: "React & Next.js Development",
    description:
      "Built modern responsive websites using React, Next.js and Tailwind CSS.",
  },
  {
    year: "2025",
    title: "Started Frontend Development",
    description:
      "Began learning HTML, CSS and JavaScript fundamentals.",
  },
];

export default function Experience() {
  return (
    <section className="container py-20 md:py-24">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16 px-3 sm:px-4">

        <p className="inline-block px-4 sm:px-5 py-1.5 rounded-full bg-[#0F1B2D] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs">
          Experience
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-5 md:mt-6 text-white">
          My <span className="text-[#22D3EE]">Journey</span>
        </h2>

        <p className="text-gray-400 mt-4 md:mt-5 max-w-2xl mx-auto leading-6 md:leading-7 text-sm sm:text-base">
          A clean timeline of my learning path, growth, and real-world development experience.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="max-w-3xl mx-auto relative px-3 sm:px-4">

        {/* CENTER LINE (responsive position fix) */}
        <div className="absolute left-2 sm:left-3 md:left-3 top-0 h-full w-[2px] bg-gradient-to-b from-[#22D3EE]/40 via-[#1E2A3B] to-[#22D3EE]/20"></div>

        {experiences.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 sm:gap-6 mb-10 md:mb-12 group relative"
          >

            {/* DOT */}
            <div className="relative z-10 mt-1">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,0.7)] group-hover:scale-110 transition"></div>
            </div>

            {/* CARD */}
            <div
              className="
                w-full p-4 sm:p-5 md:p-6 rounded-2xl

                bg-[#0F1B2D]/70
                border border-[#1E2A3B]
                shadow-md

                hover:-translate-y-2
                hover:bg-[#12243a]/90
                hover:border-[#22D3EE]/50
                hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]

                transition-all duration-500
              "
            >

              {/* YEAR */}
              <span className="inline-block px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-[#0B1220] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold">
                {item.year}
              </span>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-bold mt-3 text-white group-hover:text-[#22D3EE] transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-3 text-xs sm:text-sm leading-5 sm:leading-6">
                {item.description}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 md:mt-5 h-[1px] w-0 group-hover:w-full bg-[#22D3EE]/30 transition-all duration-500"></div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}