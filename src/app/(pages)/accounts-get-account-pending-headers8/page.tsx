import { AccountsGetAccountPendingHeaders8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders8Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers8`}
      src={AccountsGetAccountPendingHeaders8Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders8Page;
