import { AccountsGetAccountPendingLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending limit exceeded`}
      src={AccountsGetAccountPendingLimitExceededImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingLimitExceededPage;
