import { AccountsGetAccountPendingGatewayTimeoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingGatewayTimeoutPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending gateway timeout`}
      src={AccountsGetAccountPendingGatewayTimeoutImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingGatewayTimeoutPage;
