import { ListMerchantAccountsImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const ListMerchantAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={` List merchant accounts`}
      src={ListMerchantAccountsImage}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default ListMerchantAccountsPage;
