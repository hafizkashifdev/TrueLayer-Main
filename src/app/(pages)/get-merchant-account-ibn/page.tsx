import { GetMerchantAccountIbnImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const GetMerchantAccountIbnPage = () => {
  return (
    <CommonPage
      pageTitle={` Get merchant account IBN`}
      src={GetMerchantAccountIbnImage}
      backRoute="/get-merchant-account-main"
    />
  );
};

export default GetMerchantAccountIbnPage;
