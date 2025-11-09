"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Music, FileText, Mail, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"



export default function Component() {
  const [currentDateTime, setCurrentDateTime] = useState("")

useEffect(() => {
  const updateDateTime = () => {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Numeric date format: MM-DD-YYYY
    const date = now.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    // Time first, then date
    setCurrentDateTime(`${date} ${time}`);
  };

  updateDateTime();
  const interval = setInterval(updateDateTime, 1000);
  return () => clearInterval(interval);
}, []);



  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated CSS Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-600 to-cyan-300" />


        {/* Static Bright Neon Lines - Inspired by reference image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved flowing neon streams - static like in reference */}
          <div className="absolute top-1/4 left-0 w-full h-full">
            <div
              className="absolute top-0 left-0 w-full h-2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.8) 20%, rgba(99, 102, 241, 0.9) 50%, rgba(6, 182, 212, 0.8) 80%, transparent 100%)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)",
                transform: "rotate(2deg)",
              }}
            />
          </div>
          <div className="absolute top-1/3 right-0 w-full h-full">
            <div
              className="absolute top-0 right-0 w-full h-2 rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, transparent 0%, rgba(99, 102, 241, 0.8) 20%, rgba(236, 72, 153, 0.9) 50%, rgba(99, 102, 241, 0.8) 80%, transparent 100%)",
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)",
                transform: "rotate(-1deg)",
              }}
            />
          </div>
          <div className="absolute bottom-1/5 left-0 w-full h-full">
            <div
              className="absolute bottom-0 left-0 w-full h-2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.8) 25%, rgba(6, 182, 212, 0.9) 50%, rgba(99, 102, 241, 0.8) 75%, transparent 100%)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)",
                transform: "rotate(1deg)",
              }}
            />
          </div>

          {/* Diagonal neon streaks - static */}
          <div className="absolute top-1/6 left-1/4 w-96 h-2 transform rotate-12">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6, 182, 212, 0.7) 0%, rgba(99, 102, 241, 0.9) 50%, transparent 100%)",
                boxShadow: "0 0 15px rgba(6, 182, 212, 0.8)",
              }}
            />
          </div>
          <div className="absolute bottom-1/6 right-1/4 w-80 h-2 transform -rotate-12">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, rgba(99, 102, 241, 0.7) 0%, rgba(116, 211, 255, 0.9) 50%, transparent 100%)",
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
              }}
            />
          </div>
        </div>


      </div>



      {/* Time Display - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="font-mono text-sm text-white/70">{currentDateTime}</div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 space-y-8 lg:space-y-0 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center">
        {/* Central Name Display */}
        <div className="relative z-10 text-center">
          {/* Glow Aura Behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Frosted Glass Card */}
          <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl px-8 py-6 shadow-2xl max-w-2xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white"
              style={{
                textShadow: `
        `,
              }}
            >
              Jacob Mondora
            </h1>
            <p className="text-lg sm:text-xl font-bold text-white/90">Computer Engineering | Northwestern University</p>
          </div>


          
{/* Icons Container */}
<div className="flex flex-col items-center mt-10 space-y-10">
  <div className="w-full max-w-2xl">
    {/* Top row */}
    <div className="flex justify-evenly px-8">
      <a href="https://www.linkedin.com/in/jacob-mondora-b56289251/" target="_blank" rel="noreferrer">
        <Button
          size="lg"
          variant="ghost"
          className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
        >
          <Linkedin className="w-12 h-12 text-white" />
        </Button>
      </a>

      <a href="https://github.com/jacobmondora" target="_blank" rel="noreferrer">
        <Button
          size="lg"
          variant="ghost"
          className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
        >
          <Github className="w-12 h-12 text-white" />
        </Button>
      </a>

      <a href="https://soundcloud.com/user-37673422" target="_blank" rel="noreferrer">
        <Button
          size="lg"
          variant="ghost"
          className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
        >
          <Music className="w-12 h-12 text-white" />
        </Button>
      </a>
    </div>

    {/* Bottom row */}
    <div className="flex justify-evenly px-8 mt-10">
      <a href="/Jacob_Mondora_Resume.pdf" target="_blank" rel="noreferrer">
        <Button
          size="lg"
          variant="ghost"
          className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
        >
          <FileText className="w-12 h-12 text-white" />
        </Button>
      </a>

      <a href="/travel" target="_blank" rel="noreferrer">
        <Button
          size="lg"
          variant="ghost"
          className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
        >
          <Camera className="w-12 h-12 text-white" />
        </Button>
      </a>

      <Button
        size="lg"
        variant="ghost"
        onClick={() => (window.location.href = "mailto:jacobmondora@gmail.com")}
        className="w-28 h-28 rounded-3xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
      >
        <Mail className="w-12 h-12 text-white" />
      </Button>
    </div>
  </div>
</div>





 </div>



      </div>

      <style jsx>{`
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-card:nth-child(odd) {
          animation-delay: -3s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, -20px) rotate(180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, 30px) rotate(90deg); }
          75% { transform: translate(-30px, -10px) rotate(270deg); }
        }

        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-25px, 15px) rotate(90deg); }
          50% { transform: translate(15px, -25px) rotate(180deg); }
          75% { transform: translate(25px, 25px) rotate(270deg); }
        }
        
        @keyframes flow-1 {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes flow-2 {
          0% { transform: translateX(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes flow-3 {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes flow-4 {
          0% { transform: translateX(100%) scaleX(0.5); opacity: 0; }
          50% { opacity: 1; scaleX(1); }
          100% { transform: translateX(-100%) scaleX(0.5); opacity: 0; }
        }
        
        @keyframes twinkle-1 {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes twinkle-2 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes twinkle-3 {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }

        @keyframes flow-neon-1 {
          0%, 100% { opacity: 0.3; transform: rotate(12deg) scaleX(1); }
          50% { opacity: 0.8; transform: rotate(12deg) scaleX(1.2); }
        }

        @keyframes flow-neon-2 {
          0%, 100% { opacity: 0.2; transform: rotate(-6deg) scaleY(1); }
          50% { opacity: 0.7; transform: rotate(-6deg) scaleY(1.5); }
        }

        @keyframes glow {
          0%, 100% {
          text-shadow: 0 0 8px rgba(0,255,255,0.7), 0 0 14px rgba(0,255,255,0.6), 0 0 40px rgba(0,255,255,0.3);
          }
          50% {
            text-shadow: 0 0 12px rgba(99,102,241,0.8), 0 0 20px rgba(56, 132, 245, 0.6), 0 0 60px rgba(99,102,241,0.4);
          }
}

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 20s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 15s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 18s ease-in-out infinite; }
        .animate-flow-1 { animation: flow-1 8s linear infinite; }
        .animate-flow-2 { animation: flow-2 10s linear infinite 2s; }
        .animate-flow-3 { animation: flow-3 12s linear infinite 4s; }
        .animate-twinkle-1 { animation: twinkle-1 3s ease-in-out infinite; }
        .animate-twinkle-2 { animation: twinkle-2 4s ease-in-out infinite 1s; }
        .animate-twinkle-3 { animation: twinkle-3 5s ease-in-out infinite 2s; }

        .animate-float-4 { animation: float-4 22s ease-in-out infinite; }
        .animate-flow-4 { animation: flow-4 14s linear infinite 6s; }
        .animate-flow-neon-1 { animation: flow-neon-1 6s ease-in-out infinite; }
        .animate-flow-neon-2 { animation: flow-neon-2 8s ease-in-out infinite 2s; }
        
        @media (max-width: 1024px) {
          .floating-card.absolute {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
            margin: 1rem auto;
          }
        }
      `}</style>
    </div>
  )
}
