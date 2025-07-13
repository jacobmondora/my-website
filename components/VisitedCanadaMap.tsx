"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flag } from "lucide-react"
import { useState } from "react"

const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/master/public/data/canada.geojson"


const visitedProvinces = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Ontario",
]

export default function VisitedCanadaMap() {
  const [tooltipContent, setTooltipContent] = useState("")
  const fixedCenter: [number, number] = [-100, 60] // centered over Canada
  const fixedZoom = 1.5

  return (
    <Card className="relative bg-gradient-to-br from-red-900/30 to-orange-900/20 border-red-400/40 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Flag className="w-6 h-6 text-red-400" />
          Canada ({visitedProvinces.length}/13)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tooltipContent && (
          <div className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-full z-20 bg-black/80 text-white text-sm px-4 py-1 rounded-md shadow pointer-events-none">
            {tooltipContent}
          </div>
        )}

        <div className="aspect-[4/3] bg-white/5 rounded-lg border border-red-400/20 p-4">
          <ComposableMap projection="geoMercator"
  projectionConfig={{
    scale: 280,
    center: [-100, 70],
  }}
>
            
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name
                    const isVisited = visitedProvinces.includes(name)
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isVisited ? "#F87171" : "#334155"}
                        stroke="#fca5a5"
                        onMouseEnter={() => setTooltipContent(name)}
                        onMouseLeave={() => setTooltipContent("")}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#fb923c", outline: "none" },
                          pressed: { fill: "#f97316", outline: "none" },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
          </ComposableMap>
        </div>
      </CardContent>
    </Card>
  )
}
