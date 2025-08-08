import { GetMerchantAccount404AccountNotFoundResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccount404AccountNotFoundResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`404 _ Account Not Found _ Response Body`}
      src={GetMerchantAccount404AccountNotFoundResponseBodyImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccount404AccountNotFoundResponseBodyPage;
