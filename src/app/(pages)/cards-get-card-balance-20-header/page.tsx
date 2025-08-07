import { CardsGetCardBalance20HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance20HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={CardsGetCardBalance20HeaderImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance20HeaderPage;
