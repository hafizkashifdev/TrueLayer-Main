import { CommonPage } from "@/components";

import React from "react";
import { MerchantAccountResponseBodyImage200 } from "@/assets";

const MerchantAccountResponseBody200Page = () => {
  return (
    <CommonPage
      pageTitle={` 200 _ Merchant Account _ Response Body`}
      src={MerchantAccountResponseBodyImage200}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default MerchantAccountResponseBody200Page;
