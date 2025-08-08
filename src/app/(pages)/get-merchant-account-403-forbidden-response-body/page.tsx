import { GetMerchantAccount403ForbiddenResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetMerchantAccount403ForbiddenResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`403 _ Forbidden _ Response Body`}
      src={GetMerchantAccount403ForbiddenResponseBodyImage}
      backRoute="/merchant-setup-or-update-sweeping"
    />
  );
};

export default GetMerchantAccount403ForbiddenResponseBodyPage;
