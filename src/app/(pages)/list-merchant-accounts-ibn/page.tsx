import { ListMerchantAccountsIbnImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const ListMerchantAccountsIbnPage = () => {
  return (
    <CommonPage
      pageTitle={`IBN`}
      src={ListMerchantAccountsIbnImage}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default ListMerchantAccountsIbnPage;
