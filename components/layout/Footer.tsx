import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-0 border-t border-[#1E2A3B] bg-[#0B1220]/90 backdrop-blur-md">

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-16">

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* COLUMN 1 - NAME */}
          <div className="text-center md:text-left">

            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Rani Singh
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
              Frontend Developer passionate about building modern, responsive and
              visually appealing web experiences using React & Next.js.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6">

              <a
                href="https://github.com/singhrani9335"
                className="p-3 rounded-full bg-[#0F1B2D] border border-[#1E2A3B] text-gray-400 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:singhrani9335@gmail.com"
                className="p-3 rounded-full bg-[#0F1B2D] border border-[#1E2A3B] text-gray-400 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://linkedin.com"
                className="p-3 rounded-full bg-[#0F1B2D] border border-[#1E2A3B] text-gray-400 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* COLUMN 2 - LINKS */}
          <div className="text-center md:text-left">

            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#home" className="hover:text-[#22D3EE] transition">Home</a>
              <a href="#about" className="hover:text-[#22D3EE] transition">About</a>
              <a href="#skills" className="hover:text-[#22D3EE] transition">Skills</a>
              <a href="#projects" className="hover:text-[#22D3EE] transition">Projects</a>
              <a href="#contact" className="hover:text-[#22D3EE] transition">Contact</a>
            </div>

          </div>

          {/* COLUMN 3 - CONTACT */}
          <div className="text-center md:text-left">

            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaPhoneAlt className="text-[#22D3EE]" />
                8869972125
              </div>

              <div className="flex justify-center md:justify-start items-center gap-3 break-all">
                <FaEnvelope className="text-[#22D3EE]" />
                singhrani9335@gmail.com
              </div>

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaMapMarkerAlt className="text-[#22D3EE]" />
                Noida, India
              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E2A3B] to-transparent my-10" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#22D3EE] font-medium">Rani Singh</span>. All rights reserved.
        </div>

      </div>

    </footer>
  );
}