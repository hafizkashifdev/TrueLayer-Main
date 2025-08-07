import { AccountsGetAccountPendingHeaders12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders12Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers12`}
      src={AccountsGetAccountPendingHeaders12Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders12Page;
