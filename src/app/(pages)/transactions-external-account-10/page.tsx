import { TransactionsExternalAccount10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsExternalAccount10Page = () => {
  return (
    <CommonPage
      pageTitle={`External Account  `}
      src={TransactionsExternalAccount10Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsExternalAccount10Page;
