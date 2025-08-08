import { GetMerchantAccount400InvalidParameterResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccount400InvalidParameterResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`400 _ Invalid Parameter _ Response Body`}
      src={GetMerchantAccount400InvalidParameterResponseBodyImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccount400InvalidParameterResponseBodyPage;
