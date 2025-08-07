import { IntroductionImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
    {
    alt: "Welcome",
    title: "Welcome",
    href: "/introduction-welcome",
    coords: "30,33,240,98",
    shape: "rect",
  },
  {
    alt: "API overview",
    title: "API overview",
    href: "/introduction-api-overview",
    coords: "32,398,311,467",
    shape: "rect",
  },
];

const IntroductionPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Introduction`}
      image={IntroductionImage}
      backRoute="/"
      areas={areas}
    />
  );
};

export default IntroductionPage;
