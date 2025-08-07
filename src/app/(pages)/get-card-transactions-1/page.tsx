import { GetCardTransactions1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCardTransactions1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get card transactions 1`}
      src={GetCardTransactions1Image}
      backRoute="/get-card-transactions"
    />
  );
};

export default GetCardTransactions1Page;
