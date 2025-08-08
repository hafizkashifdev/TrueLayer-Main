import { GetMerchantAccount401UnauthenticatedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccount401UnauthenticatedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`401_ unauthenticated _ Response Body`}
      src={GetMerchantAccount401UnauthenticatedResponseBodyImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccount401UnauthenticatedResponseBodyPage;
