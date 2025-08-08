import { TransactionsPendingPayout9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsPendingPayout9Page = () => {
  return (
    <CommonPage
      pageTitle={`PENDING PAYOUT `}
      src={TransactionsPendingPayout9Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsPendingPayout9Page;
