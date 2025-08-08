import { GetMerchantAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccountPage = () => {
  return (
    <CommonPage
      pageTitle={` Get merchant account `}
      src={GetMerchantAccountImage}
      backRoute="/get-merchant-account-main"
    />
  );
};

export default GetMerchantAccountPage;
