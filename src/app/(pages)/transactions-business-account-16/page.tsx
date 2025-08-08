import { TransactionsBusinessAccount16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBusinessAccount16Page = () => {
  return (
    <CommonPage
      pageTitle={` BUSINESS ACCOUNT `}
      src={TransactionsBusinessAccount16Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsBusinessAccount16Page;
