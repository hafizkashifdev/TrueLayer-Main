import { TransactionsBusinessAccount12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBusinessAccount12Page = () => {
  return (
    <CommonPage
      pageTitle={`BUSINESS ACCOUNT  `}
      src={TransactionsBusinessAccount12Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsBusinessAccount12Page;
