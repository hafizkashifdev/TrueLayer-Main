import { AccountsGetAccountPendingHeaders4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders4Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers4`}
      src={AccountsGetAccountPendingHeaders4Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders4Page;
