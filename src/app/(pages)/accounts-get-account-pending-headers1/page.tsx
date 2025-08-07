import { AccountsGetAccountPendingHeaders1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders1Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers1`}
      src={AccountsGetAccountPendingHeaders1Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders1Page;
