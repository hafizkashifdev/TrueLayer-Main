import { AcccountGetTransactionPathParams } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsPathParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Path Params`}
      src={AcccountGetTransactionPathParams}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsPathParamsPage;
