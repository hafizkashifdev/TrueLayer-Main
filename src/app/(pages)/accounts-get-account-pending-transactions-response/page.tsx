import { AccountGetAccountPendingResponse1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponseshPage = () => {
  return (
      <CommonPage
        pageTitle={`Accounts Get account pending transactions Response`}
        src={AccountGetAccountPendingResponse1}
        backRoute="/account-get-account-pending-transaction"
      />
  );
};

export default AccountsGetAccountTransactionsResponseshPage;
