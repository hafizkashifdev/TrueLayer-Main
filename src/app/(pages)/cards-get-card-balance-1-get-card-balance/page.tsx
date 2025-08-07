import { CardsGetCardBalance1GetCardBalanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CardsGetCardBalance1GetCardBalancePage = () => {
  return (
    <CommonPage
      pageTitle={`Get card balance`}
      src={CardsGetCardBalance1GetCardBalanceImage}
      backRoute="/cards-get-card-balance"
    />
  );
};

export default CardsGetCardBalance1GetCardBalancePage;
