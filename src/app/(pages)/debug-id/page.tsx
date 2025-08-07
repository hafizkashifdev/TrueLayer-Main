import { DebugIdImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "",
    coords: "",
    shape: "",
  },
];

const DebugIdPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Debug ID`}
      image={DebugIdImage}
      backRoute="/truelayer-authentication-server"
      areas={areas}
    />
  );
};

export default DebugIdPage;
