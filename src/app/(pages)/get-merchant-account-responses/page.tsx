import { GetMerchantAccountResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccountResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` Get merchant account Responses `}
      src={GetMerchantAccountResponsesImage}
      backRoute="/get-merchant-account-main"
    />
  );
};

export default GetMerchantAccountResponsesPage;
