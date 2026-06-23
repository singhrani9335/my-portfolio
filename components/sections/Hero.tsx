"use client";

import FadeUp from "@/components/ui/FadeUp";
import { FaStar } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-start pt-20 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <FadeUp>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">

          {/* BACKGROUNDS */}
          <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-gradient-to-br from-[#0B1220] via-[#0F1B2D] to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-gradient-to-tr from-[#0B1220] via-[#0F1B2D] to-transparent blur-3xl rounded-full" />

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-screen">

            {/* LEFT */}
            <div className="relative z-10 flex flex-col justify-center lg:pr-10 text-center lg:text-left">

              {/* BADGE */}
              <span
                className="w-fit mx-auto lg:mx-0 flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm 
              bg-[#0F1B2D] border border-[#1E2A3B] text-[#22D3EE] font-medium"
              >
                <FaStar className="text-[#22D3EE] text-sm" />
                Frontend Developer • React • Next.js • UI Enthusiast
              </span>

              {/* NAME */}
              <h1 className="mt-5 text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight text-white">
                Hi, I’m <span className="text-[#22D3EE]">Rani Singh</span>
              </h1>

              {/* ANIMATION */}
              <div className="mt-6 text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-gray-400">I’m </span>

                <span className="text-[#22D3EE] font-semibold">
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer",
                      1500,
                      "React & Next.js Developer",
                      1500,
                      "UI/UX Engineer",
                      1500,
                      "Problem Solver",
                      1500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 text-gray-400 leading-7 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                I build modern, responsive and high-performance web applications
                using React, Next.js and Tailwind CSS with clean UI and smooth
                user experience.
              </p>

              {/* STATS */}
              <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mt-8 flex-wrap">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">15+</p>
                  <p className="text-xs sm:text-sm text-gray-400">Projects</p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">8+</p>
                  <p className="text-xs sm:text-sm text-gray-400">Clients</p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">1+</p>
                  <p className="text-xs sm:text-sm text-gray-400">Year</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 space-y-4">

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/resume.pdf"
                    className="flex-1 px-5 sm:px-6 py-3 rounded-xl bg-[#22D3EE] text-[#0B1220] font-medium text-center hover:bg-[#1bbdd6] transition"
                  >
                    Download CV
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 px-5 sm:px-6 py-3 rounded-xl border border-[#22D3EE] text-[#22D3EE] text-center hover:bg-[#22D3EE] hover:text-[#0B1220] transition"
                  >
                    Hire Me
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 px-5 sm:px-6 py-3 rounded-xl bg-[#1E2A3B] text-white text-center hover:bg-[#263447] transition"
                  >
                    Contact Me
                  </a>

                  <a
                    href="#projects"
                    className="flex-1 px-5 sm:px-6 py-3 rounded-xl border border-[#1E2A3B] text-gray-300 text-center hover:bg-[#1E2A3B] transition"
                  >
                    View Projects
                  </a>
                </div>

              </div>
            </div>

            {/* RIGHT */}
<div className="relative flex items-center justify-end overflow-visible group mt-10 lg:mt-0 lg:pr-2">

  {/* GLOW */}
  <div className="absolute right-0 lg:right-[-140px] w-[250px] sm:w-[350px] lg:w-[420px] h-[250px] sm:h-[350px] lg:h-[420px] bg-[#22D3EE]/10 blur-3xl rounded-full" />

  <div className="relative ml-auto lg:translate-x-14">

    {/* FLOATING TEXT */}
    <div className="hidden sm:block absolute -left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="bg-[#0F1B2D] border border-[#22D3EE]/30 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
        <span className="text-[#22D3EE] font-semibold">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React & Next.js Developer",
              1500,
              "UI/UX Engineer",
              1500,
              "Problem Solver",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </span>
      </div>
    </div>

    {/* IMAGE */}
    <img
      src="/profile.jpg"
      alt="Rani Singh"
      className="
        w-[220px] h-[220px]
        sm:w-[300px] sm:h-[300px]
        md:w-[520px] md:h-[520px]
        object-cover
        rounded-full
        border-4 border-[#1E2A3B]
        shadow-[0_0_60px_rgba(34,211,238,0.15)]
        transition duration-500
        hover:scale-105
      "
    />

  </div>
</div>

          </div>
        </div>
      </FadeUp>
    </section>
  );
}