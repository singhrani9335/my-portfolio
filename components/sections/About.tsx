import FadeUp from "@/components/ui/FadeUp";

export default function About() {
  return (
    <section id="about" className="container py-24">
      <FadeUp>

        {/* SECTION HEADING */}
        <div className="text-center mb-20 px-4 sm:px-6 md:px-0">

          {/* SMALL TAG */}
          <p className="inline-block px-4 py-1 rounded-full bg-[#0F1B2D] border border-[#22D3EE]/30 text-[#22D3EE] font-semibold uppercase tracking-[4px] text-xs sm:text-sm">
            About Me
          </p>

          {/* MAIN HEADING */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-snug sm:leading-tight">
            Get To Know{" "}
            <span className="text-[#22D3EE] relative inline-block">
              Me Better
              <span className="absolute left-0 -bottom-2 w-full h-[2px] sm:h-[3px] bg-[#22D3EE]/40 rounded-full"></span>
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-6 sm:leading-7 text-sm sm:text-base md:text-lg px-2 sm:px-0">
            I am passionate about building modern, responsive and user-friendly web
            experiences. I focus on clean UI design, smooth performance, and scalable
            frontend architecture that delivers real value to users.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-center px-4 sm:px-6 md:px-10 lg:px-16">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">

            <div className="relative scale-100 sm:scale-105 lg:scale-110">

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#22D3EE]/10 blur-[90px] sm:blur-[100px] rounded-full" />

              {/* TOP BADGE */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 bg-[#0F1B2D]/95 backdrop-blur-md border border-[#22D3EE]/20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                <p className="text-[#22D3EE] text-[9px] sm:text-[10px] uppercase tracking-[3px] font-semibold">
                  Creative Developer
                </p>
                <h4 className="text-white font-bold text-xs sm:text-sm mt-1">
                  React • Next.js
                </h4>
              </div>

              {/* IMAGE */}
              <img
                src="/profile.jpg"
                alt="Rani Singh"
                className="
                  relative z-10
                  w-[280px] h-[280px]
                  sm:w-[350px] sm:h-[350px]
                  md:w-[520px] md:h-[520px]
                  object-cover
                  rounded-[30px] sm:rounded-[40px]
                  border border-[#22D3EE]/20
                  shadow-[0_20px_60px_rgba(34,211,238,0.15)]
                  transition-all duration-500
                  hover:-translate-y-2
                "
              />

              {/* LEFT CARD */}
              <div className="absolute -left-4 sm:-left-5 bottom-6 sm:bottom-8 z-20 bg-[#0F1B2D]/95 backdrop-blur-md border border-[#22D3EE]/20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                <p className="text-[#22D3EE] font-bold text-xs sm:text-sm">
                  UI Focused
                </p>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                  Responsive Design
                </p>
              </div>

              {/* RIGHT CARD */}
              <div className="absolute -right-4 sm:-right-5 -bottom-4 sm:-bottom-5 z-20 bg-[#22D3EE] text-[#0B1220] px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(34,211,238,0.25)]">
                <h4 className="text-xl sm:text-2xl font-black">15+</h4>
                <p className="text-[10px] sm:text-xs font-semibold">Projects</p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h3 className="leading-tight text-center lg:text-left">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
                Hello! I'm <span className="text-[#22D3EE]">Rani Singh</span>
              </span>

              <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-gray-400">
                Frontend Developer
              </span>
            </h3>

            <p className="mt-6 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base text-center lg:text-left">
              I specialize in building modern web interfaces that combine elegant design,
              smooth performance and strong user experience.
            </p>

            <p className="mt-4 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base text-center lg:text-left">
              My expertise includes React, Next.js and Tailwind CSS for scalable
              and fast applications.
            </p>

            <p className="mt-4 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base text-center lg:text-left">
              I focus on continuous learning and building real-world impactful
              projects.
            </p>

            {/* CORE STRENGTHS */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-5 text-center lg:text-left">
                My Core Strengths
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

                {[
                  "Modern UI Development",
                  "Responsive Design",
                  "React & Next.js",
                  "Performance Optimization",
                  "Clean Code Practices",
                  "Continuous Learning",
                ].map((item) => (
                  <p key={item} className="text-gray-300 text-sm sm:text-base">
                    <span className="text-[#22D3EE] font-bold mr-2">•</span>
                    {item}
                  </p>
                ))}

              </div>
            </div>

            {/* BUTTON */}
            <div className="text-center lg:text-left">
              <a
                href="/resume.pdf"
                className="
                  inline-block mt-8
                  px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                  bg-[#22D3EE]
                  text-[#0B1220]
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                  shadow-lg
                "
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>

      </FadeUp>
    </section>
  );
}
