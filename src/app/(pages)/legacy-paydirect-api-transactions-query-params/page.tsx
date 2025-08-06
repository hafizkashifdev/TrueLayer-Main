import { LegacyPaydirectApiTransactionsQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiTransactionsQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API Transactions Query Params`}
      src={LegacyPaydirectApiTransactionsQueryParamsImage}
      backRoute="/legacy-paydirect-api-transactions"
    />
  );
};

export default LegacyPaydirectApiTransactionsQueryParamsPage;
