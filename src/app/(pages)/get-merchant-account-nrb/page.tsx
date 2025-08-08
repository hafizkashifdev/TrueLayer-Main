import { GetMerchantAccountNrbImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccountNrbPage = () => {
  return (
    <CommonPage
      pageTitle={` Get merchant account NRB `}
      src={GetMerchantAccountNrbImage}

      backRoute="/get-merchant-account-main"
    />
  );
};

export default GetMerchantAccountNrbPage;
