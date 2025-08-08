import { Card1GetCardsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card1GetCardsPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-get-cards`}
      src={Card1GetCardsImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card1GetCardsPage;
