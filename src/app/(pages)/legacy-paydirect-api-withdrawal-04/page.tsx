import { LegacyPaydirectApiWithdrawal04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiWithdrawal04Page = () => {
  return (
    <CommonPage
      pageTitle={`Get withdrawal`}
      src={LegacyPaydirectApiWithdrawal04Image}
      backRoute="/legacy-paydirect-api-withdrawal"
    />
  );
};

export default LegacyPaydirectApiWithdrawal04Page;
