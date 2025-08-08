import { AccountsGetAccountPendingInternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingInternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending internal server error`}
      src={AccountsGetAccountPendingInternalServerErrorImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingInternalServerErrorPage;
