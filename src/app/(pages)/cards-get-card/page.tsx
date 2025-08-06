import { CardsGetCardImage } from "@/assets";
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

const CardsGetCardPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get card`}
      image={CardsGetCardImage}
      backRoute="/truelayer-accounts-cards"
      areas={areas}
    />
  );
};

export default CardsGetCardPage;
