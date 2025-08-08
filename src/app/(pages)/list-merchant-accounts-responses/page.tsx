import { ListMerchantAccountsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListMerchantAccountsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` List merchant accounts Responses`}
      src={ListMerchantAccountsResponsesImage}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default ListMerchantAccountsResponsesPage;
