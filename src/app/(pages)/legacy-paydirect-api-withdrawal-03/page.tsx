import { LegacyPaydirectApiWithdrawal03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiWithdrawal03Page = () => {
  return (
    <CommonPage
      pageTitle={`Get user withdrawal`}
      src={LegacyPaydirectApiWithdrawal03Image}
      backRoute="/legacy-paydirect-api-withdrawal"
    />
  );
};

export default LegacyPaydirectApiWithdrawal03Page;
