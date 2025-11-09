"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

const visitedCountries = [
  "United States of America",
  "United Kingdom",
  "Canada",
  "Switzerland",
  "Spain",
  "France",
  "Monaco",
  "Poland",
  "Belgium",
  "Iceland",
]

// Minimal safe type for react-simple-maps geography data
type GeoType = {
  rsmKey: string
  properties: { name: string }
}

export default function VisitedWorldMap() {
  const [tooltipContent, setTooltipContent] = useState("")
  const fixedZoom = 1
  const fixedCenter: [number, number] = [0, 20]

  return (
    <Card className="relative bg-gradient-to-br from-sky-700 to-sky-200 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          Countries ({visitedCountries.length})
        </CardTitle>
      </CardHeader>

      <CardContent>
        {tooltipContent && (
          <div className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-full z-20 bg-black/80 text-white text-sm px-4 py-1 rounded-md shadow pointer-events-none">
            {tooltipContent}
          </div>
        )}

        <div className="aspect-[4/3] bg-white/5 rounded-lg border border-blue-400/20 p-4">
          <ComposableMap projectionConfig={{ scale: 150 }}>
            <ZoomableGroup
              zoom={fixedZoom}
              center={fixedCenter}
              onMoveEnd={({ coordinates }: { coordinates: [number, number] }) => {
                if (
                  coordinates[0] !== fixedCenter[0] ||
                  coordinates[1] !== fixedCenter[1]
                ) {
                  window.requestAnimationFrame(() => {
                    document
                      .querySelector("svg g")
                      ?.setAttribute(
                        "transform",
                        `translate(0,0) scale(${fixedZoom})`
                      )
                  })
                }
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeoType[] }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name
                    const isVisited = visitedCountries.includes(name)

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isVisited ? "#93c5fd" : "#334155"}
                        stroke={isVisited ? "#d1f0faff" : "#cbd5e1"}
                        onMouseEnter={() => setTooltipContent(name)}
                        onMouseLeave={() => setTooltipContent("")}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#0ea5e9", outline: "none" },
                          pressed: { fill: "#0284c7", outline: "none" },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          <div className="mt-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Visited Countries
            </h4>
            <div className="bg-emerald-950/40 border border-emerald-600/30 rounded-lg p-4 max-w-md max-h-40 overflow-y-auto text-white text-sm shadow-inner">
              <ul className="list-disc list-inside space-y-1 pr-2">
                {visitedCountries.map((country) => (
                  <li key={country}>{country}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
