import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f23] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-[0_0_60px_20px_rgba(255,255,200,0.3)] animate-float" />

      {/* Ground/Path */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2d1810] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-t from-[#4a3728] to-transparent rounded-t-full opacity-60" />

      {/* Main Gate Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Gate Title Banner */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative px-8 py-3 bg-pixel-wood pixel-border">
            <h1 className="font-pixel text-xs md:text-sm text-amber-100 tracking-wider">
              PORTFOLIO CITY
            </h1>
            {/* Banner ropes */}
            <div className="absolute -top-4 left-4 w-0.5 h-4 bg-amber-700" />
            <div className="absolute -top-4 right-4 w-0.5 h-4 bg-amber-700" />
          </div>
        </div>

        {/* The Gate */}
        <div className="relative animate-fade-in-up animation-delay-200">
          {/* Gate Frame - Stone Pillars */}
          <div className="flex items-end gap-0">
            {/* Left Pillar */}
            <div className="relative">
              <div className="w-12 md:w-16 h-64 md:h-80 bg-gradient-to-b from-[#6b5b4f] via-[#5a4a3f] to-[#4a3a2f] pixel-border">
                {/* Stone texture lines */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-black/20"
                    style={{ top: `${(i + 1) * 12}%` }}
                  />
                ))}
              </div>
              {/* Pillar top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 h-6 bg-[#5a4a3f] pixel-border" />
              {/* Torch */}
              <div className="absolute -right-4 top-8 flex flex-col items-center">
                <div className="w-2 h-8 bg-pixel-wood" />
                <div className="w-4 h-6 bg-gradient-to-t from-orange-600 via-yellow-500 to-yellow-300 rounded-t-full animate-pulse-glow" />
              </div>
            </div>

            {/* Gate Doors */}
            <div className="relative w-40 md:w-56 h-56 md:h-72 overflow-hidden">
              {/* Arch top */}
              <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-[#5a4a3f] pixel-border rounded-t-full" />
              
              {/* Door Container */}
              <div className="absolute top-12 md:top-16 left-0 right-0 bottom-0 flex overflow-hidden">
                {/* Left Door */}
                <div 
                  className={`w-1/2 h-full bg-gradient-to-br from-pixel-wood to-[#5c3d2e] pixel-border transition-transform duration-1000 origin-left ${isOpening ? '-rotate-[85deg]' : ''}`}
                >
                  {/* Wood planks */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 h-px bg-black/30"
                      style={{ top: `${(i + 1) * 20}%` }}
                    />
                  ))}
                  {/* Door handle */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full border-2 border-yellow-800" />
                  {/* Decorative iron bands */}
                  <div className="absolute left-0 right-0 top-[15%] h-2 bg-[#3a3a3a]" />
                  <div className="absolute left-0 right-0 top-[50%] h-2 bg-[#3a3a3a]" />
                  <div className="absolute left-0 right-0 top-[85%] h-2 bg-[#3a3a3a]" />
                </div>
                
                {/* Right Door */}
                <div 
                  className={`w-1/2 h-full bg-gradient-to-bl from-pixel-wood to-[#5c3d2e] pixel-border transition-transform duration-1000 origin-right ${isOpening ? 'rotate-[85deg]' : ''}`}
                >
                  {/* Wood planks */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 h-px bg-black/30"
                      style={{ top: `${(i + 1) * 20}%` }}
                    />
                  ))}
                  {/* Door handle */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full border-2 border-yellow-800" />
                  {/* Decorative iron bands */}
                  <div className="absolute left-0 right-0 top-[15%] h-2 bg-[#3a3a3a]" />
                  <div className="absolute left-0 right-0 top-[50%] h-2 bg-[#3a3a3a]" />
                  <div className="absolute left-0 right-0 top-[85%] h-2 bg-[#3a3a3a]" />
                </div>
              </div>

              {/* City glimpse behind gate */}
              <div className="absolute top-12 md:top-16 left-0 right-0 bottom-0 -z-10 bg-gradient-to-t from-amber-900/50 via-amber-800/30 to-purple-900/20 flex items-end justify-center pb-4">
                {/* Mini building silhouettes */}
                <div className="flex gap-1 items-end">
                  <div className="w-4 h-8 bg-amber-950/60" />
                  <div className="w-6 h-12 bg-amber-950/60" />
                  <div className="w-5 h-6 bg-amber-950/60" />
                  <div className="w-4 h-10 bg-amber-950/60" />
                  <div className="w-6 h-8 bg-amber-950/60" />
                </div>
              </div>
            </div>

            {/* Right Pillar */}
            <div className="relative">
              <div className="w-12 md:w-16 h-64 md:h-80 bg-gradient-to-b from-[#6b5b4f] via-[#5a4a3f] to-[#4a3a2f] pixel-border">
                {/* Stone texture lines */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-black/20"
                    style={{ top: `${(i + 1) * 12}%` }}
                  />
                ))}
              </div>
              {/* Pillar top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 h-6 bg-[#5a4a3f] pixel-border" />
              {/* Torch */}
              <div className="absolute -left-4 top-8 flex flex-col items-center">
                <div className="w-2 h-8 bg-pixel-wood" />
                <div className="w-4 h-6 bg-gradient-to-t from-orange-600 via-yellow-500 to-yellow-300 rounded-t-full animate-pulse-glow" />
              </div>
            </div>
          </div>

          {/* Ground stones */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-4 bg-[#4a3a2f] rounded-t-sm pixel-border"
              />
            ))}
          </div>
        </div>

        {/* Enter Button */}
        <div className="mt-12 animate-fade-in-up animation-delay-400">
          {!isOpening ? (
            <button
              onClick={handleEnter}
              className="group relative px-8 py-4 bg-gradient-to-b from-amber-600 to-amber-800 pixel-border hover:from-amber-500 hover:to-amber-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(245,158,11,0.4)]"
            >
              <span className="font-pixel text-xs md:text-sm text-amber-100 tracking-wider group-hover:text-white transition-colors">
                ENTER THE CITY
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          ) : (
            <Link
              to="/city"
              className="group relative px-8 py-4 bg-gradient-to-b from-emerald-600 to-emerald-800 pixel-border animate-pulse-glow"
            >
              <span className="font-pixel text-xs md:text-sm text-emerald-100 tracking-wider">
                → PROCEED →
              </span>
            </Link>
          )}
        </div>

        {/* Subtitle */}
        <p className="mt-6 font-retro text-lg md:text-xl text-amber-200/70 animate-fade-in-up animation-delay-500">
          {isOpening ? "The gates are open..." : "Click to open the gates"}
        </p>
      </div>

      {/* Decorative lanterns */}
      <div className="absolute bottom-20 left-8 md:left-20 animate-float animation-delay-200">
        <div className="w-6 h-8 bg-gradient-to-b from-red-700 to-red-900 rounded-b-lg pixel-border opacity-80">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-amber-800" />
        </div>
      </div>
      <div className="absolute bottom-24 right-8 md:right-20 animate-float animation-delay-400">
        <div className="w-6 h-8 bg-gradient-to-b from-red-700 to-red-900 rounded-b-lg pixel-border opacity-80">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-amber-800" />
        </div>
      </div>
    </div>
  );
};

export default Index;
