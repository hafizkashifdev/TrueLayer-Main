import { CardsGetCardBalance30503ServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance30503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable) `}
      src={CardsGetCardBalance30503ServiceUnavailableImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance30503ServiceUnavailablePage;
