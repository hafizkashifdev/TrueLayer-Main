import { AccountsGetAccountPendingPathParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending path params`}
      src={AccountsGetAccountPendingPathParamsImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingPathParamsPage;
