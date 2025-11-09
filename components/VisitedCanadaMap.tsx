"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"


type GeoFeature = {
  type: "Feature";
  geometry: {
    type: string;
    coordinates: unknown; // or number[][] if you want stricter typing
  };
  properties: {
    name: string;
    [key: string]: string | number | boolean | null | undefined;
  };
  rsmKey?: string;
};

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


  return (
    <Card className="relative bg-gradient-to-br from-sky-700 to-sky-200 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)]">

      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          Canada ({visitedProvinces.length}/13)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tooltipContent && (
          <div className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-full z-20 bg-black/80 text-white text-sm px-4 py-1 rounded-md shadow pointer-events-none">
            {tooltipContent}
          </div>
        )}

        <div className="aspect-[4/3] bg-white/5 rounded-lg border border-blue-400/20 p-4">
          <ComposableMap projection="geoMercator"
  projectionConfig={{
    scale: 280,
    center: [-100, 70],
  }}
>
            
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeoFeature[] }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name
                    const isVisited = visitedProvinces.includes(name)
                    return (
                    <Geography
  key={geo.rsmKey}
  geography={geo}
  fill={isVisited ? "#93c5fd" : "#334155"} // same fills you love
  stroke={isVisited ? "#d1f0faff" : "#cbd5e1"} // gray border for visited, light border for unvisited
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
          </ComposableMap>
        </div>
      </CardContent>
    </Card>
  )
}
