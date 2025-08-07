import { AccountsGetAccountsQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Query Params`}
      src={AccountsGetAccountsQueryParamsImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsQueryParamsPage;
