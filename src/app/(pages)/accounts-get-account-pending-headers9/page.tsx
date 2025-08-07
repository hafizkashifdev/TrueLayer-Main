import { AccountsGetAccountPendingHeaders9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingHeaders9Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending headers9`}
      src={AccountsGetAccountPendingHeaders9Image}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingHeaders9Page;
