import { ListMerchantAccountsNrbImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const ListMerchantAccountsNrbPage = () => {
  return (
    <CommonPage
      pageTitle={` NRB`}
      src={ListMerchantAccountsNrbImage}
   
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default ListMerchantAccountsNrbPage;
