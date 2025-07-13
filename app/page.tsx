"use client"

import type * as React from "react"
import { useState, useEffect } from "react"
import { Github, Linkedin, Music, FileText, Mail, Download, Code, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const FloatingCard = ({
  children,
  className = "",
  delay = 0,
  href,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  href?: string
  onClick?: () => void
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const cardContent = (
    <Card
      className={`
        floating-card cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl
        bg-white/10 border-white/20 hover:border-cyan-400/50
        backdrop-blur-md
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
      onClick={onClick}
    >
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    )
  }

  return cardContent
}

export default function Component() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated CSS Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800" />

        {/* Flowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow bg-gradient-to-r from-cyan-500/35 to-indigo-600/40" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float-1 bg-gradient-to-r from-indigo-500/45 to-blue-500/35" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float-2 bg-gradient-to-r from-blue-400/40 to-indigo-400/30" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-float-3 bg-gradient-to-r from-indigo-600/35 to-indigo-700/45" />
          <div className="absolute top-1/6 right-1/6 w-56 h-56 rounded-full blur-3xl animate-float-4 bg-gradient-to-r from-indigo-500/30 to-cyan-500/25" />
        </div>

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
          <div className="absolute bottom-1/3 left-0 w-full h-full">
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
                  "linear-gradient(270deg, rgba(99, 102, 241, 0.7) 0%, rgba(236, 72, 153, 0.9) 50%, transparent 100%)",
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
              }}
            />
          </div>

          {/* Additional curved elements */}
          <div className="absolute top-2/3 left-1/6 w-64 h-1 transform rotate-45">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.6) 50%, rgba(99, 102, 241, 0.7) 100%)",
                boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
              }}
            />
          </div>
          <div className="absolute top-1/8 right-1/3 w-48 h-1 transform -rotate-30">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, transparent 0%, rgba(99, 102, 241, 0.6) 50%, rgba(236, 72, 153, 0.7) 100%)",
                boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
              }}
            />
          </div>
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/5 left-0 w-full h-px animate-flow-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <div className="absolute top-2/5 left-0 w-full h-px animate-flow-2 bg-gradient-to-r from-transparent via-purple-400/45 to-transparent" />
            <div className="absolute top-3/5 left-0 w-full h-px animate-flow-3 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <div className="absolute top-4/5 left-0 w-full h-px animate-flow-4 bg-gradient-to-r from-transparent via-purple-300/35 to-transparent" />
          </div>
        </div>

        {/* Geometric chevron patterns */}
        {/* <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/6 right-1/4 w-32 h-32">
            <div className="absolute inset-0 border-l-2 border-t-2 transform rotate-45 animate-pulse-slow border-purple-400/40" />
            <div className="absolute inset-2 border-l-2 border-t-2 transform rotate-45 animate-float-1 border-cyan-400/30" />
            <div className="absolute inset-4 border-l-2 border-t-2 transform rotate-45 animate-float-2 border-purple-300/20" />
          </div>
          <div className="absolute bottom-1/4 left-1/5 w-24 h-24">
            <div className="absolute inset-0 border-r-2 border-b-2 transform -rotate-12 animate-float-3 border-cyan-400/40" />
            <div className="absolute inset-2 border-r-2 border-b-2 transform -rotate-12 animate-twinkle-1 border-purple-400/30" />
          </div>
        </div> */}

        {/* Neon flowing curves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/6 w-64 h-2 rounded-full transform rotate-12 animate-flow-neon-1 bg-gradient-to-r from-purple-500/30 via-cyan-400/40 to-transparent" />
          <div className="absolute bottom-1/2 right-1/4 w-48 h-1 rounded-full transform -rotate-6 animate-flow-neon-2 bg-gradient-to-l from-cyan-400/35 via-purple-500/25 to-transparent" />
          <div className="absolute top-2/3 left-1/2 w-32 h-1 rounded-full transform rotate-45 animate-twinkle-3 bg-gradient-to-r from-purple-400/30 to-cyan-300/20" />
        </div>
      </div>

      {/* Enhanced Bright Grid Overlay */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
            backgroundPosition: "0 0, 0 0, 20px 20px, 20px 20px",
          }}
        />
        {/* Grid glow effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Time Display - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="font-mono text-sm text-white/70">{currentTime}</div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-6 space-y-8 lg:space-y-0 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center">
        {/* Central Name Display */}
        <div className="relative z-10 text-center">
          {/* Glow Aura Behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Frosted Glass Card */}
          <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl px-8 py-6 shadow-2xl max-w-2xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-glow"
              style={{
                textShadow: `
          0 0 8px rgba(0,255,255,0.7),
          0 0 14px rgba(0,255,255,0.6),
          0 0 40px rgba(0,255,255,0.3)
        `,
              }}
            >
              Jacob Mondora
            </h1>
            <p className="text-lg sm:text-xl font-bold text-white/90">Computer Engineering @ Northwestern</p>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center space-x-6 mt-10">
            <a href="https://www.linkedin.com/in/jacob-mondora-b56289251/" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </Button>
            </a>
            <a href="https://github.com/jacobmondora" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </Button>
            </a>

            <a href="https://soundcloud.com/user-37673422" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-orange-500/20 border border-white/20 hover:border-orange-400/50 transition-all duration-300"
              >
                <Music className="w-6 h-6 text-white" />
              </Button>
            </a>
          </div>
        </div>

        {/* Floating Cards - Positioned Around the Screen */}

        {/* Top Left - Resume */}
        <FloatingCard
          className="w-full max-w-xs lg:absolute lg:top-20 lg:left-20"
          delay={200}
          href="/Jacob_Mondora_Resume_2024.pdf"
        >
          <div className="text-center">
            <FileText className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <h3 className="font-semibold mb-2 text-white">Resume</h3>
            <Button size="sm" variant="ghost" className="mt-3 text-cyan-400 hover:text-cyan-300">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </FloatingCard>

        {/* Top Right - Fitness */}
        <FloatingCard className="w-full max-w-xs lg:absolute lg:top-20 lg:right-16" delay={400} href="/travel">
          <div className="text-center">
            <Camera className="w-8 h-8 mx-auto mb-3 text-green-400" />
            <h3 className="font-semibold mb-2 text-white">Travels & Photography</h3>
            <div className="mt-3 text-sm text-green-400">Click Here →</div>
          </div>
        </FloatingCard>

        {/* Left Side - Music Production */}

        {/* Bottom Left - Contact */}
        <FloatingCard
          className="w-full max-w-xs lg:absolute lg:bottom-24 lg:left-24"
          delay={800}
          onClick={() => (window.location.href = "mailto:jacobmondora@gmail.com")}
        >
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-3 text-pink-400" />
            <h3 className="font-semibold mb-2 text-white">Get in Touch</h3>
            <div className="mt-3 text-sm text-pink-400">Send Email →</div>
          </div>
        </FloatingCard>

        {/* Bottom Right - About */}
        <FloatingCard className="w-full max-w-xs lg:absolute lg:bottom-20 lg:right-20" delay={1000} href="/projects">
          <div className="text-center">
            <Code className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <h3 className="font-semibold mb-2 text-white">Personal Projects</h3>
            <div className="mt-3 text-sm text-cyan-400">See Projects →</div>
          </div>
        </FloatingCard>

        {/* Mobile-only bottom navigation */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
          <div className="flex space-x-4 backdrop-blur-md rounded-full p-3 bg-white/10 border border-white/20">
            <Button size="sm" variant="ghost" className="rounded-full">
              <FileText className="w-5 h-5 text-cyan-400" />
            </Button>
            <Button size="sm" variant="ghost" className="rounded-full">
              <Camera className="w-5 h-5 text-green-400" />
            </Button>
            <Button size="sm" variant="ghost" className="rounded-full">
              <Music className="w-5 h-5 text-purple-400" />
            </Button>
            <Button size="sm" variant="ghost" className="rounded-full">
              <Mail className="w-5 h-5 text-pink-400" />
            </Button>
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
            text-shadow: 0 0 12px rgba(99,102,241,0.8), 0 0 20px rgba(99,102,241,0.6), 0 0 60px rgba(99,102,241,0.4);
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
