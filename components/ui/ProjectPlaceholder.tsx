import { Globe } from "lucide-react";

export default function ProjectPlaceholder() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-[#08111d] via-[#0B1625] to-[#0F1B2D] flex items-center justify-center overflow-hidden">

      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
        <Globe className="w-12 h-12 text-gray-400" />
      </div>

    </div>
  );
}