import { AccountsGetAccountPendingHeaders7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders7Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers7`}
      src={AccountsGetAccountPendingHeaders7Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders7Page;
