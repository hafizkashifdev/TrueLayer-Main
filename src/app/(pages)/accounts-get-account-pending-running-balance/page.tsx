import { AccountsGetAccountPendingRunningBalanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingRunningBalancePage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending running balance`}
      src={AccountsGetAccountPendingRunningBalanceImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPendingRunningBalancePage;
