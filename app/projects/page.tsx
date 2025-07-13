"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Zap, Cpu, Music } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  //category: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
  icon: React.ReactNode
  color: string
}

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})

  const projects: Project[] = [
    {
      id: "digital-synthesizer",
      title: "Digital Synthesizer",
      //category: "Audio Engineering",
      description:
        "Coming Soon",
      longDescription:
        "Coming Soon",
      technologies: ["Coming Soon"],
      images: [
        "/ComingSoon.png?height=400&width=600",
        "/ComingSoon.png?height=400&width=600",
        "/ComingSoon.png?height=400&width=600",
      ],
      githubUrl: "https://github.com/jacobmondora/digital-synthesizer",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-400/20 to-sky-300/15",
    },
    {
      id: "class-project",
      title: "Embedded Systems Controller",
      //category: "Computer Engineering",
      description:
        "Coming Soon",
      longDescription:
        "Coming Soon",
      technologies: ["Coming Soon"],
      images: [
        "/ComingSoon.png?height=400&width=600",
        "/ComingSoon.png?height=400&width=600",
        "/ComingSoon.png?height=400&width=600",
      ],
      githubUrl: "https://github.com/jacobmondora/embedded-controller",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-400/20 to-sky-300/15",
    },
  ]

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 relative overflow-hidden">
      {/* Futuristic Blue Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-blue-800/80" />


        {/* Holographic blue orbs */}
        <div className="absolute top-1/5 left-1/6 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-r from-blue-400/15 to-sky-300/20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-r from-sky-500/12 to-blue-600/18 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-r from-blue-300/10 to-cyan-400/15 animate-pulse" />

        {/* Futuristic grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="futuristicGrid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M20 20h80v80h-80z" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
                <circle cx="20" cy="20" r="4" fill="#60A5FA" opacity="0.8" />
                <circle cx="100" cy="20" r="4" fill="#60A5FA" opacity="0.8" />
                <circle cx="20" cy="100" r="4" fill="#60A5FA" opacity="0.8" />
                <circle cx="100" cy="100" r="4" fill="#60A5FA" opacity="0.8" />
                <path
                  d="M20 20L100 20M20 100L100 100M20 20L20 100M100 20L100 100"
                  stroke="#3B82F6"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
                <path d="M60 20L60 100M20 60L100 60" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#futuristicGrid)" />
          </svg>
        </div>

        {/* Neon blue accent lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-full">
            <div
              className="absolute top-0 left-0 w-full h-3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 20%, rgba(14, 165, 233, 0.8) 50%, rgba(59, 130, 246, 0.6) 80%, transparent 100%)",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)",
                transform: "rotate(1deg)",
              }}
            />
          </div>
          <div className="absolute bottom-1/3 right-0 w-full h-full">
            <div
              className="absolute bottom-0 right-0 w-full h-3 rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, transparent 0%, rgba(14, 165, 233, 0.6) 20%, rgba(2, 132, 199, 0.8) 50%, rgba(14, 165, 233, 0.6) 80%, transparent 100%)",
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.8), 0 0 60px rgba(14, 165, 233, 0.4)",
                transform: "rotate(-1deg)",
              }}
            />
          </div>
        </div>

        {/* Holographic data streams */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/6 left-1/4 w-[600px] h-4 transform rotate-12">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, rgba(14, 165, 233, 0.7) 50%, transparent 100%)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
              }}
            />
          </div>
          <div className="absolute bottom-1/6 right-1/4 w-[500px] h-4 transform -rotate-12">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, rgba(14, 165, 233, 0.4) 0%, rgba(2, 132, 199, 0.7) 50%, transparent 100%)",
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.6)",
              }}
            />
          </div>
        </div>

        {/* Hexagonal tech pattern */}
        <div className="absolute top-1/3 right-1/3 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <polygon
              points="100,40 150,70 150,130 100,160 50,130 50,70"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="1.5"
            />
            <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="none" stroke="#0284C7" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-glow"
              style={{
                textShadow: `
                  0 0 8px rgba(0,255,255,0.7),0 0 14px rgba(0, 119, 255, 0.6),
      0 0 40px rgba(0, 81, 255, 0.3)
        `         ,
              }}
            >
              Personal Projects
            </h1>
            <div
              className="w-32 h-1 mx-auto rounded-full"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #0EA5E9, #0284C7)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
              }}
            />
          </div>
          {/* <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
            Engineering the future through innovative code • Transforming ideas into digital reality
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {projects.map((project) => {
            const currentIndex = currentImageIndex[project.id] || 0

            return (
              <Card
                key={project.id}
                className={`bg-gradient-to-br ${project.color} border-blue-400/30 backdrop-blur-xl hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-blue-500/20`}
                style={{
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 40px rgba(59, 130, 246, 0.05)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-400/20 border border-blue-400/30">
                        <div className="text-blue-300">{project.icon}</div>
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl font-bold">{project.title}</CardTitle>
                        <Badge
                          variant="secondary"
                          className="mt-2 bg-gradient-to-r from-blue-500/20 to-sky-400/20 text-blue-200 border-blue-400/30"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/20 border border-blue-400/30"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/20 border border-blue-400/30"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div
                      className="aspect-video bg-gradient-to-br from-blue-950/50 to-sky-900/30 rounded-xl overflow-hidden border-2 border-blue-400/30"
                      style={{
                        boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <img
                        src={project.images[currentIndex] || "/placeholder.svg"}
                        alt={`${project.title} - Image ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Navigation buttons */}
                    {project.images.length > 1 && (
                      <>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800/90 text-blue-100 border border-blue-400/50"
                          onClick={() => prevImage(project.id, project.images.length)}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800/90 text-blue-100 border border-blue-400/50"
                          onClick={() => nextImage(project.id, project.images.length)}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>

                        {/* Image indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.images.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-blue-600 shadow-lg shadow-blue-500/60" : "bg-blue-500/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Description */}
                  <div className="space-y-5">
                    <p className="text-blue-100/90 text-sm leading-relaxed">{project.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-blue-200 font-semibold flex items-center gap-2">
                        Explanation:
                      </h4>
                      <p className="text-blue-200/80 text-sm leading-relaxed">{project.longDescription}</p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-blue-200 font-semibold text-sm">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-gradient-to-r from-blue-400/10 to-sky-300/10 border-blue-300/30 text-blue-200 hover:bg-blue-400/20 transition-all duration-300"

                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        {/* <Card
          className="bg-gradient-to-r from-blue-950/60 to-sky-900/40 border-blue-400/40 backdrop-blur-xl"
          style={{
            boxShadow: "0 0 50px rgba(59, 130, 246, 0.15), inset 0 0 50px rgba(59, 130, 246, 0.05)",
          }}
        >
          <CardContent className="p-10 text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-blue-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-100">Next Generation Projects</h3>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-blue-200/80 max-w-2xl mx-auto text-lg">
                Currently architecting cutting-edge solutions in machine learning, distributed systems, and quantum
                computing interfaces. The future of technology is being built here.
              </p>
              <div
                className="w-24 h-1 mx-auto rounded-full"
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #0EA5E9, #0284C7)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)",
                }}
              />
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  )
}
