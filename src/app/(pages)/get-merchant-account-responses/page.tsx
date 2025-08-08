import { GetMerchantAccountResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccountResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={GetMerchantAccountResponsesImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccountResponsesPage;
