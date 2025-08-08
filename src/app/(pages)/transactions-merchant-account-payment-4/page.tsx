import { TransactionsMerchantAccountPayment4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsMerchantAccountPayment4Page = () => {
  return (
    <CommonPage
      pageTitle={`MERCHANT ACCOUNT PAYMENT `}
      src={TransactionsMerchantAccountPayment4Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsMerchantAccountPayment4Page;
