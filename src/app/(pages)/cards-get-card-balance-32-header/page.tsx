import { CardsGetCardBalance32HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance32HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={CardsGetCardBalance32HeaderImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance32HeaderPage;
