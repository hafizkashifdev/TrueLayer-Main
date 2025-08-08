import { TransactionsRefund17Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsRefund17Page = () => {
  return (
    <CommonPage
      pageTitle={`Refund  `}
      src={TransactionsRefund17Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsRefund17Page;
