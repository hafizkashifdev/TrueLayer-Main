import { AccountsGetAccountPendingQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending query params`}
      src={AccountsGetAccountPendingQueryParamsImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingQueryParamsPage;
