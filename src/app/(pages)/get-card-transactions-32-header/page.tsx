import { GetCardTransactions32HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCardTransactions32HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Get card transactions 32 Header`}
      src={GetCardTransactions32HeaderImage}
      backRoute="/get-card-transactions"
    />
  );
};

export default GetCardTransactions32HeaderPage;
