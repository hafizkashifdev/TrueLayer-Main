import { GetMerchantAccountSweepingResponsesImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const GetMerchantAccountSweepingResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` Get merchant account Sweeping Responses `}
      src={GetMerchantAccountSweepingResponsesImage}
      backRoute="/get-merchant-account-main"
    />
  );
};

export default GetMerchantAccountSweepingResponsesPage;
