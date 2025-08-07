import { AccountsGetAccountPendingHeaders5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders5Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers5`}
      src={AccountsGetAccountPendingHeaders5Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders5Page;
