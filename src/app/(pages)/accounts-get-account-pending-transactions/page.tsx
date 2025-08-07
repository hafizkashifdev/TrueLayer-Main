import { AccountsGetAccountPendingTransactionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingTransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending transactions`}
      src={AccountsGetAccountPendingTransactionsImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPendingTransactionsPage;
