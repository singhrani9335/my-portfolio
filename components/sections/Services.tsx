const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
  },
  {
    title: "Next.js Development",
    description:
      "Modern web applications using Next.js and TypeScript.",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first layouts optimized for all devices.",
  },
  {
    title: "UI Implementation",
    description:
      "Converting designs into clean and reusable code.",
  },
];

export default function Services() {
  return (
    <section className="container py-20 md:py-24">

      {/* HEADER (same spacing style as About) */}
      <div className="text-center mb-20 px-4 sm:px-6 md:px-10 lg:px-16">

        <p className="inline-block px-4 sm:px-5 py-1.5 rounded-full bg-[#0F1B2D] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold uppercase tracking-[4px] text-[10px] sm:text-xs">
          Services
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-6 text-white">
          What I <span className="text-[#22D3EE]">Do</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-6 sm:leading-7 px-2 sm:px-0">
          I build modern, responsive and scalable web experiences using latest technologies.
        </p>

      </div>

      {/* GRID (About-style padding match) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 px-4 sm:px-6 md:px-10 lg:px-16">

        {services.map((service) => (
          <div
            key={service.title}
            className="
              group relative
              p-5 sm:p-6 rounded-2xl

              bg-[#0F1B2D]/60
              border border-[#1E2A3B]
              shadow-md

              hover:-translate-y-2
              hover:bg-[#12243a]/80
              hover:border-[#22D3EE]/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]

              transition-all duration-500
            "
          >

            {/* DOT */}
            <div className="w-3 h-3 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,0.7)] mb-4"></div>

            {/* TITLE */}
            <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#22D3EE] transition">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-5 sm:leading-6">
              {service.description}
            </p>

            {/* hover line */}
            <div className="mt-4 sm:mt-5 h-[1px] w-0 group-hover:w-full bg-[#22D3EE]/30 transition-all duration-500"></div>

          </div>
        ))}

      </div>

    </section>
  );
}