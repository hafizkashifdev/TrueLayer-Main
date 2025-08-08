import { AccountsGetAccountPendingHeaders6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders6Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers6`}
      src={AccountsGetAccountPendingHeaders6Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders6Page;
