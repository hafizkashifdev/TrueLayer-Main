import { PendingTransactions2111312Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PendingTransactions2111312Page = () => {
  return (
    <CommonPage
      pageTitle={`pending transactions 2.1.1.1.3.1.2`}
      src={PendingTransactions2111312Image}
      backRoute="/batch"
    />
  );
};

export default PendingTransactions2111312Page;
