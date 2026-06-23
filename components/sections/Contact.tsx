import {
  FaEnvelope,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

import FadeUp from "@/components/ui/FadeUp";

export default function Contact() {
  return (
    <section className="container py-20 md:py-24">
      <FadeUp>
        {/* MAIN HEADING */}
        <div className="text-center mb-14 md:mb-20 px-4 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-[#0ea5e9]">
            Let’s Work Together
          </h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-6 sm:leading-7">
            I’m currently open to job opportunities, freelance work, and project
            collaborations. If you’re looking to hire a developer or discuss a
            project idea, I’d be happy to connect and contribute.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 px-4 sm:px-6 md:px-10 lg:px-16">
          {/* LEFT FORM */}
          <div className="rounded-2xl border border-[#1E2A3B] bg-[#0F1B2D]/60 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              Send me a Message
            </h3>

            <div className="space-y-5">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <FaUser className="text-[#22D3EE]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full p-3 md:p-4 rounded-xl border border-[#1E2A3B] bg-transparent text-white outline-none focus:border-[#22D3EE] transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <FaEnvelope className="text-[#22D3EE]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    className="mt-2 w-full p-3 md:p-4 rounded-xl border border-[#1E2A3B] bg-transparent text-white outline-none focus:border-[#22D3EE] transition"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <FaPhoneAlt className="text-[#22D3EE]" />
                    Phone (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="+91 8869972125"
                    className="mt-2 w-full p-3 md:p-4 rounded-xl border border-[#1E2A3B] bg-transparent text-white outline-none focus:border-[#22D3EE] transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <FaTag className="text-[#22D3EE]" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    list="subject-options"
                    placeholder="Select or type subject"
                    className="mt-2 w-full p-3 md:p-4 rounded-xl border border-[#1E2A3B] bg-transparent text-white outline-none focus:border-[#22D3EE] transition"
                  />

                  <datalist id="subject-options">
                    <option value="Project Inquiry" />
                    <option value="Freelance Work" />
                    <option value="Job Opportunity" />
                    <option value="Collaboration" />
                    <option value="Internship" />
                    <option value="Website Development" />
                    <option value="Bug Report" />
                    <option value="Other" />
                  </datalist>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaCommentDots className="text-[#22D3EE]" />
                  Your Message *
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project and requirements..."
                  className="mt-2 w-full p-3 md:p-4 rounded-xl border border-[#1E2A3B] bg-transparent text-white outline-none resize-none focus:border-[#22D3EE] transition"
                />
              </div>

              {/* BUTTON */}
              <button className="w-full flex items-center justify-center gap-2 bg-[#22D3EE] text-[#0B1220] py-3 md:py-4 rounded-xl hover:opacity-90 active:scale-95 transition font-medium text-sm md:text-base">
                <FaPaperPlane />
                Let’s Connect
              </button>

              <p className="text-xs text-center text-gray-500 px-2">
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4 md:space-y-5">
            <div className="p-4 md:p-5 rounded-xl border border-[#1E2A3B] bg-[#0F1B2D]/60 backdrop-blur-md flex items-start gap-4">
              <FaEnvelope className="text-[#22D3EE] mt-1" size={18} />
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">
                  Email
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 break-all">
                  singhrani9335@gmail.com
                </p>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-xl border border-[#1E2A3B] bg-[#0F1B2D]/60 backdrop-blur-md flex items-start gap-4">
              <FaPhoneAlt className="text-[#22D3EE] mt-1" size={18} />
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">
                  Phone
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  8869972125
                </p>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-xl border border-[#1E2A3B] bg-[#0F1B2D]/60 backdrop-blur-md flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#22D3EE] mt-1" size={18} />
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">
                  Location
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Noida, India
                </p>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-xl border border-[#1E2A3B] bg-[#0F1B2D]/40 backdrop-blur-md">
              <h3 className="font-semibold text-white text-sm md:text-base mb-3">
                Quick Response
              </h3>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-gray-400 text-xs md:text-sm">
                  Response within 1–2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
