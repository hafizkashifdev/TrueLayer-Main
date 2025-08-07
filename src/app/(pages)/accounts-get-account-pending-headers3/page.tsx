import { AccountsGetAccountPendingHeaders3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders3Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers3`}
      src={AccountsGetAccountPendingHeaders3Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders3Page;
