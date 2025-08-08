import { AccountsGetStandingOrdersQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetStandingOrdersQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-standing-orders-query-params`}
      src={AccountsGetStandingOrdersQueryParamsImage}
      backRoute="/accounts-get-standing-orders"
    />
  );
};

export default AccountsGetStandingOrdersQueryParamsPage;
