import { LegacyPaydirectApiBalancesGetAccountBalancesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiBalancesGetAccountBalancesPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API Balances Get account balances`}
      src={LegacyPaydirectApiBalancesGetAccountBalancesImage}
      backRoute="/legacy-paydirect-api-balances"
    />
  );
};

export default LegacyPaydirectApiBalancesGetAccountBalancesPage;
