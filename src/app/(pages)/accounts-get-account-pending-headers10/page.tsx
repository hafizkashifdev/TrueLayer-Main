import { AccountsGetAccountPendingHeaders10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders10Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers10`}
      src={AccountsGetAccountPendingHeaders10Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders10Page;
