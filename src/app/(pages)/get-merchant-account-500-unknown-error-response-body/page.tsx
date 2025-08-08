import { GetMerchantAccount500UnknownErrorResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccount500UnknownErrorResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`500 _ Unknown Error _ Response Body`}
      src={GetMerchantAccount500UnknownErrorResponseBodyImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccount500UnknownErrorResponseBodyPage;
