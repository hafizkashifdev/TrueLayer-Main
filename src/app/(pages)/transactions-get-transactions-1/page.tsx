import { TransactionsGetTransactions1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsGetTransactions1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get transactions`}
      src={TransactionsGetTransactions1Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsGetTransactions1Page;
