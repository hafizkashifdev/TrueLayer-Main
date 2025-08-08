import { TransactionsRemitterObject7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsRemitterObject7Page = () => {
  return (
    <CommonPage
      pageTitle={`REMITTER OBJECT `}
      src={TransactionsRemitterObject7Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsRemitterObject7Page;
