"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

// Dynamically import maps with SSR disabled
const VisitedWorldMap = dynamic(() => import("@/components/VisitedWorldMap"), { ssr: false })
const VisitedCanadaMap = dynamic(() => import("@/components/VisitedCanadaMap"), { ssr: false })
const VisitedUSMap = dynamic(() => import("@/components/VisitedUSMap"), { ssr: false })
const VisitedNationalParks = dynamic(() => import("@/components/VisitedNationalParks"), { ssr: false })
const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]

export default function TravelPage() {
  const samplePhotos = [
    {
      id: "1",
      url: "/IMG_8792.jpg?height=300&width=300",
      location: "Skógafoss, Iceland",
    },
    {
      id: "2",
      url: "/IMG_3037.jpg?height=300&width=300",
      location: "Tenerife, Canary Islands, Spain",
    },
    {
      id: "3",
      url: "/IMG_7083.jpg?height=300&width=300",
      location: "Crater Lake, Oregon, United States",
    },
    {
      id: "4",
      url: "/IMG_7121.jpg?height=300&width=300",
      location: "Warsaw, Poland",
    },
  ]

  return (
    <div className="min-h-screen bg-sky-900 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-1/5 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-cyan-400/15 to-sky-500/20" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-sky-400/10 to-blue-400/15" />
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <polygon
              points="0,200 200,50 400,120 600,30 800,90 1000,60 1200,100 1200,200"
              fill="rgba(56,189,248,0.25)"
            />
            <polygon
              points="0,200 150,80 350,140 550,60 750,110 950,80 1200,120 1200,200"
              fill="rgba(59,130,246,0.2)"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-orange-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Traveling & Photography
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Photos Taken on the Canon PowerShot G7 X Mark II
          </p>
        </div>




<div className="mb-20 flex flex-wrap justify-center gap-12">
  {samplePhotos.map((photo, index) => (
    <div
      key={photo.id}
      className={`w-72 aspect-square transform ${rotations[index % rotations.length]} transition-transform hover:rotate-0 hover:scale-105`}
    >
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black/20">
        <img
          src={photo.url}
          alt={photo.location}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-3 text-center text-white/80 text-sm">
        {photo.location}
      </p>
    </div>
  ))}
</div>


        {/* Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <VisitedUSMap />
          <VisitedCanadaMap />
          <VisitedWorldMap />
          <VisitedNationalParks />
        </div>
      </div>
    </div>
  )
}
