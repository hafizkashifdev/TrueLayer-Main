import { LegacyPaydirectApiDeposit02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiDeposit02Page = () => {
  return (
    <CommonPage
      pageTitle={`Create deposit`}
      src={LegacyPaydirectApiDeposit02Image}
      backRoute="/legacy-paydirect-api-deposit"
    />
  );
};

export default LegacyPaydirectApiDeposit02Page;
