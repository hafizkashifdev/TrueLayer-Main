import { GetCardTransactions20HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCardTransactions20HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Get card transactions 20 Header`}
      src={GetCardTransactions20HeaderImage}
      backRoute="/get-card-transactions"
    />
  );
};

export default GetCardTransactions20HeaderPage;
