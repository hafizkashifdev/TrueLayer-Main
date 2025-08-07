import { LegacyPaydirectApiTransactionsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiTransactionsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API Transactions Responses`}
      src={LegacyPaydirectApiTransactionsResponsesImage}
      backRoute="/legacy-paydirect-api-transactions"
    />
  );
};

export default LegacyPaydirectApiTransactionsResponsesPage;
