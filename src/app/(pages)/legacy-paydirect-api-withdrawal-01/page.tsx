import { LegacyPaydirectApiWithdrawal01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiWithdrawal01Page = () => {
  return (
    <CommonPage
      pageTitle={`Create open-loop withdrawal`}
      src={LegacyPaydirectApiWithdrawal01Image}
      backRoute="/legacy-paydirect-api-withdrawal"
    />
  );
};

export default LegacyPaydirectApiWithdrawal01Page;
