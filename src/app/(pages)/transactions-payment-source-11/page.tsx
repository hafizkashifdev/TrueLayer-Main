import { TransactionsPaymentSource11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsPaymentSource11Page = () => {
  return (
    <CommonPage
      pageTitle={`PAYMENT SOURCE `}
      src={TransactionsPaymentSource11Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsPaymentSource11Page;
