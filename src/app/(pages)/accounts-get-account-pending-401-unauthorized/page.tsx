import { AccountsGetAccountPending401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPending401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending 401 unauthorized`}
      src={AccountsGetAccountPending401UnauthorizedImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPending401UnauthorizedPage;
