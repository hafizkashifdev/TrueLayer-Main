import { LegacyPaydirectApiWithdrawal02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiWithdrawal02Page = () => {
  return (
    <CommonPage
      pageTitle={`Create closed-loop withdrawal`}
      src={LegacyPaydirectApiWithdrawal02Image}
      backRoute="/legacy-paydirect-api-withdrawal"
    />
  );
};

export default LegacyPaydirectApiWithdrawal02Page;
