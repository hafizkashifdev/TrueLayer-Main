import { LegacyPaydirectApiDeposit01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiDeposit01Page = () => {
  return (
    <CommonPage
      pageTitle={`Get deposit for user`}
      src={LegacyPaydirectApiDeposit01Image}
      backRoute="/legacy-paydirect-api-deposit"
    />
  );
};

export default LegacyPaydirectApiDeposit01Page;
