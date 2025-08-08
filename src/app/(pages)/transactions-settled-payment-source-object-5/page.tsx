import { TransactionsSettledPaymentSourceObject5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsSettledPaymentSourceObject5Page = () => {
  return (
    <CommonPage
      pageTitle={`SETTLED PAYMENT SOURCE OBJECT  `}
      src={TransactionsSettledPaymentSourceObject5Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsSettledPaymentSourceObject5Page;
