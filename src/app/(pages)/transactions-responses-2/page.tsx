import { TransactionsResponses2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsResponses2Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={TransactionsResponses2Image}
      backRoute="/get-transactions"
    />
  );
};

export default TransactionsResponses2Page;
