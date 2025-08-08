import { TransactionsPaymentSourceObject18Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsPaymentSourceObject18Page = () => {
  return (
    <CommonPage
      pageTitle={`PAYMENT SOURCE OBJECT  `}
      src={TransactionsPaymentSourceObject18Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsPaymentSourceObject18Page;
