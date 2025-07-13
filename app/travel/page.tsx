"use client"

import { MapPin, Compass } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import maps with SSR disabled
const VisitedWorldMap = dynamic(() => import("@/components/VisitedWorldMap"), { ssr: false })
const VisitedCanadaMap = dynamic(() => import("@/components/VisitedCanadaMap"), { ssr: false })
const VisitedUSMap = dynamic(() => import("@/components/VisitedUSMap"), { ssr: false })
const VisitedNationalParks = dynamic(() => import("@/components/VisitedNationalParks"), { ssr: false })

export default function TravelPage() {
  const samplePhotos = [
    {
      id: "1",
      url: "/IMG_7121.jpg?height=300&width=300",
      location: "Warsaw, Poland",
    },
    {
      id: "2",
      url: "/IMG_7083.jpg?height=300&width=300",
      location: "Crater Lake National Park, Oregon, United States",
    },
    {
      id: "3",
      url: "/IMG_3037.jpg?height=300&width=300",
      location: "Tenerife, Canary Islands, Spain",
    },
    {
      id: "4",
      url: "/IMG_7122.jpg?height=300&width=300",
      location: "Toronto, Ontario, Canada",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-orange-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/60 to-orange-900/70" />
        <div className="absolute top-1/6 left-1/5 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-orange-500/15 to-amber-600/20" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-emerald-500/10 to-teal-600/15" />
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <polygon points="0,200 200,50 400,120 600,30 800,90 1000,60 1200,100 1200,200" fill="rgba(16, 185, 129, 0.3)" />
            <polygon points="0,200 150,80 350,140 550,60 750,110 950,80 1200,120 1200,200" fill="rgba(251, 146, 60, 0.2)" />
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

        {/* Photo Gallery */}
        <Card className="mb-12 bg-gradient-to-r from-slate-900/40 to-emerald-900/20 border-cyan-400/30 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2 -mt-5">
              <MapPin className="w-6 h-6 text-cyan-400" />
              Recent Travels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {samplePhotos.map((photo) => (
                <div key={photo.id} className="group">
                  <div className="aspect-square rounded-lg overflow-hidden bg-white/5 border border-orange-400/20 mb-3">
                    <img
                      src={photo.url || "/placeholder.svg"}
                      alt={photo.location}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">{photo.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
