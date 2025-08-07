import { CardsGetCardBalance12401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance12401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized) `}
      src={CardsGetCardBalance12401UnauthorizedImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance12401UnauthorizedPage;
