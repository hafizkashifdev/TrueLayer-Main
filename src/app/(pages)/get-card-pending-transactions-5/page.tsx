import { GetCardPendingTransactions5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCardPendingTransactions5Page = () => {
  return (
    <CommonPage
      pageTitle={`get card pending transactions 5`}
      src={GetCardPendingTransactions5Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default GetCardPendingTransactions5Page;
