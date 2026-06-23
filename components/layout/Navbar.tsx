"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-[#1E2A3B]
        bg-[#0B1220]/80
        backdrop-blur-md
      "
    >
      <div className="h-20 w-full flex items-center px-4 sm:px-6 md:px-8">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#22D3EE] shadow-md">
            <img
              src="/profile.jpg"
              alt="Rani Singh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="leading-tight">
            <h1 className="font-bold text-base md:text-lg">
              <span className="text-[#22D3EE]">Rani</span>{" "}
              <span className="text-white">Singh</span>
            </h1>

            <p className="text-xs text-[#22D3EE]">
              Frontend Developer
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-8">

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-8">

            {links.map((link) => {
              const isActive =
                active === link.href.replace("#", "");

              return (
                <li
                  key={link.href}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-2 text-sm font-medium transition
                      ${
                        isActive
                          ? "text-[#22D3EE]"
                          : "text-gray-300 hover:text-[#22D3EE]"
                      }
                    `}
                  >
                    <span className="text-[#22D3EE] text-sm">
                      {link.icon}
                    </span>

                    {link.name}
                  </Link>

                  {/* ACTIVE + HOVER UNDERLINE */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px]
                      bg-[#22D3EE]
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </li>
              );
            })}

          </ul>

          {/* HIRE BUTTON */}
          <a
            href="#contact"
            className="
              hidden lg:block
              px-5 py-2.5 rounded-xl
              bg-[#22D3EE]
              text-[#0B1220]
              font-semibold
              shadow-md
              hover:scale-105
              transition
            "
          >
            Hire Me
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#22D3EE] text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-[#1E2A3B] bg-[#0B1220]/95 backdrop-blur-md">

          <div className="p-4 flex flex-col gap-3">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  flex items-center gap-3
                  p-3 rounded-lg
                  text-gray-300
                  hover:text-[#22D3EE]
                  hover:bg-[#1E2A3B]
                  transition
                "
              >
                <span className="text-[#22D3EE]">
                  {link.icon}
                </span>

                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              className="
                mt-2
                py-3
                rounded-lg
                text-center
                font-medium
                bg-[#22D3EE]
                text-[#0B1220]
              "
            >
              Hire Me
            </a>

          </div>
        </div>
      )}
    </header>
  );
}