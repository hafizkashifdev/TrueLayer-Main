import { CardsGetCardBalance21429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance21429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`429(Rate Limit Exceeded) `}
      src={CardsGetCardBalance21429RateLimitExceededImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance21429RateLimitExceededPage;
