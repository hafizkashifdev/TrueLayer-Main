import { CardsGetCardBalance4HeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance4HeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={CardsGetCardBalance4HeadersImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance4HeadersPage;
