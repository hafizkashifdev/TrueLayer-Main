import { TransactionsExecutedPayout13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsExecutedPayout13Page = () => {
  return (
    <CommonPage
      pageTitle={`EXECUTED PAYOUT `}
      src={TransactionsExecutedPayout13Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsExecutedPayout13Page;
