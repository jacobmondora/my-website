/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
declare module "react-simple-maps" {
  export interface GeoFeature {
    type: "Feature";
    geometry: {
      type: string;
      coordinates: any;
    };
    properties: {
      [key: string]: any;
    };
    rsmKey?: string;
  }
}

declare module "react-simple-maps" {
  export const ComposableMap: any
  export const Geographies: any
  export const Geography: any
  export const ZoomableGroup: any
  export const Marker: any
}