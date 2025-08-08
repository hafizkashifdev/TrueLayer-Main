import { AcccountGetTransactionHeaders1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Headers`}
      src={AcccountGetTransactionHeaders1}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsHeadersPage;
