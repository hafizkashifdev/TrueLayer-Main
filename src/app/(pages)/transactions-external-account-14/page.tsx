import { TransactionsExternalAccount14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsExternalAccount14Page = () => {
  return (
    <CommonPage
      pageTitle={`External Account`}
      src={TransactionsExternalAccount14Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsExternalAccount14Page;
