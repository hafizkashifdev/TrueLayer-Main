import { DebugIdImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    name: "Debug ID Generate a debug ID",
    alt: "Debug ID Generate a debug ID",
    title: "Debug ID Generate a debug ID",
    href: "/debug-id-generate-a-debug-id",
    coords: "32,39,389,103",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID API Overview",
    alt: "Debug ID API Overview",
    title: "Debug ID API Overview",
    href: "/debug-id-api-overview",
    coords: "1419,44,1793,106",
    shape: "rect",
    target: "_blank"
  },
  {
    name: "Debug IDebug IDAccess token _ Responses 200DAccess token _ Responses",
    alt: "Debug IDebug IDAccess token _ Responses 200DAccess token _ Responses",
    title: "Debug IDebug IDAccess token _ Responses 200DAccess token _ Responses",
    href: "/debug-idebug-idaccess-token-responses-200daccess-token-responses",
    coords: "58,122,1790,367",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 400",
    alt: "Debug ID Responses 400",
    title: "Debug ID Responses 400",
    href: "/debug-id-responses-400",
    coords: "60,413,285,464",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 401",
    alt: "Debug ID Responses 401",
    title: "Debug ID Responses 401",
    href: "/debug-id-responses-401",
    coords: "69,492,819,547",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 500",
    alt: "Debug ID Responses 500",
    title: "Debug ID Responses 500",
    href: "/debug-id-responses-500",
    coords: "930,492,1477,558",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Delete a debug ID",
    alt: "Debug ID Delete a debug ID",
    title: "Debug ID Delete a debug ID",
    href: "/debug-id-delete-a-debug-id",
    coords: "81,774,624,838",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 400",
    alt: "Debug ID Responses 400",
    title: "Debug ID Responses 400",
    href: "/debug-id-responses-400",
    coords: "930,782,1517,834",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 401",
    alt: "Debug ID Responses 401",
    title: "Debug ID Responses 401",
    href: "/debug-id-responses-401",
    coords: "45,1125,347,1176",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Debug ID Responses 500",
    alt: "Debug ID Responses 500",
    title: "Debug ID Responses 500",
    href: "/debug-id-responses-500",
    coords: "1398,1120,1800,1184",
    shape: "rect",
    target: "_blank"
  }
];


const DebugIdPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Debug ID`}
      image={DebugIdImage}
      backRoute="/true-layer-authentication-server"
      areas={areas}
    />
  );
};

export default DebugIdPage;
