import { TransactionsExternalPayment6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsExternalPayment6Page = () => {
  return (
    <CommonPage
      pageTitle={`EXTERNAL PAYMENT `}
      src={TransactionsExternalPayment6Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsExternalPayment6Page;
