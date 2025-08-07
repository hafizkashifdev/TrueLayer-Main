import { CardsGetCardBalance25ResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance25ResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response body`}
      src={CardsGetCardBalance25ResponseBodyImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance25ResponseBodyPage;
