import { TransactionsPaymentSource15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsPaymentSource15Page = () => {
  return (
    <CommonPage
      pageTitle={`PAYMENT SOURCE`}
      src={TransactionsPaymentSource15Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsPaymentSource15Page;
