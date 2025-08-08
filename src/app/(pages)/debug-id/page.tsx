import { DebugIdImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "32,39,389,103",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "1419,44,1793,106",
    shape: "rect",
    target: "_blank"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "58,122,1790,367",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "60,413,285,464",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "69,492,819,547",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "930,492,1477,558",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "81,774,624,838",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "930,782,1517,834",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
    coords: "45,1125,347,1176",
    shape: "rect",
    target: "_self"
  },
  {
    name: "",
    alt: "",
    title: "",
    href: "/",
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
