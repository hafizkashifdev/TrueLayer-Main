import { LegacyPaydirectApiBalancesResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiBalancesResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API Balances Responses`}
      src={LegacyPaydirectApiBalancesResponsesImage}
      backRoute="/legacy-paydirect-api-balances"
    />
  );
};

export default LegacyPaydirectApiBalancesResponsesPage;
