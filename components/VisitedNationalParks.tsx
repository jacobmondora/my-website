"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
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


const visitedNationalParks = [
  {
    name: "Yellowstone",
    latitude: 44.5979,
    longitude: -110.5612,
  },
  {
    name: "Cuyahoga Valley",
    latitude: 41.2808,
    longitude: -81.5678,
  },
  {
    name: "Everglades",
    latitude: 25.2866,
    longitude: -80.8987,
  },
  {
    name: "Grand Teton",
    latitude: 43.7904,
    longitude: -110.6818,
  },
  {
    name: "Rocky Mountain",
    latitude: 40.3428,
    longitude: -105.6836,
  },
  {
    name: "Arches",
    latitude: 38.7328,
    longitude: -109.5746,
  },
  {
    name: "Canyonlands",
    latitude: 38.2136,
    longitude: -109.9025,
  },
  {
    name: "Great Sand Dunes",
    latitude: 37.7658,
    longitude: -105.6236,
  },
  {
    name: "Glacier",
    latitude: 48.7596,
    longitude: -113.787,
  },
  {
    name: "Badlands",
    latitude: 43.8554,
    longitude: -102.3397,
  },
  {
    name: "Wind Cave",
    latitude: 43.5724,
    longitude: -103.4416,
  },
  {
    name: "Theodore Roosevelt",
    latitude: 46.979,
    longitude: -103.5387,
  },
  {
    name: "Indiana Dunes",
    latitude: 41.6533,
    longitude: -87.0524,
  },
  {
    name: "Mount Rainier",
    latitude: 46.8671,
    longitude: -121.6999,
  },
  {
    name: "Crater Lake",
    latitude: 42.9295,
    longitude: -122.1279,
  },
  {
    name: "Acadia",
    latitude: 44.3386,
    longitude: -68.2733,
  },
]

export default function VisitedNationalParks() {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
<Card className="relative bg-gradient-to-br from-sky-600 to-sky-300 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)]">
  

      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          US National Parks ({visitedNationalParks.length}/63)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tooltipContent && (
          <div className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-full z-20 bg-black/80 text-white text-sm px-4 py-1 rounded-md shadow pointer-events-none">
            {tooltipContent}
          </div>
        )}

        <div className="aspect-[4/3] bg-white/5 rounded-lg border border-blue-400/20 p-4">
          <ComposableMap projection="geoAlbersUsa" projectionConfig={{ scale: 1000 }}>
            <Geographies geography="https://raw.githubusercontent.com/codeforgermany/click_that_hood/master/public/data/united-states.geojson">
              {({ geographies }: { geographies: GeoFeature[] }) =>
  geographies.map((geo) => (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      fill="#334155" // dark slate background, same base
      stroke="#d1f0faff" // soft white border to match other maps
      style={{
        default: { outline: "none" },
        hover: { fill: "#0ea5e9", outline: "none" }, // blue hover consistency
        pressed: { fill: "#0284c7", outline: "none" },
      }}
    />
  ))
}
            </Geographies>
            {visitedNationalParks.map((park) => (
              <Marker
                key={park.name}
                coordinates={[park.longitude, park.latitude]}
                onMouseEnter={() => setTooltipContent(park.name)}
                onMouseLeave={() => setTooltipContent("")}
              >
                <circle r={4} fill="#93c5fd" stroke="#d1f0faff" strokeWidth={1.5} />
              </Marker>
            ))}
          </ComposableMap>

          <div className="mt-6">
            <h4 className="text-white text-sm font-semibold mb-3">
              Visited National Parks
            </h4>
            <div className="bg-green-950/40 border border-green-600/30 rounded-lg p-4 max-w-md max-h-40 overflow-y-auto text-white text-sm shadow-inner">
              <ul className="list-disc list-inside space-y-1 pr-2">
                {visitedNationalParks.map((park) => (
                  <li key={park.name}>{park.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
