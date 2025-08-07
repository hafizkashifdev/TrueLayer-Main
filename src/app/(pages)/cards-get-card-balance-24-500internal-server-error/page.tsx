import { CardsGetCardBalance24500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance24500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error) `}
      src={CardsGetCardBalance24500InternalServerErrorImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance24500InternalServerErrorPage;
