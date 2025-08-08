import { AcccountGetTransactionQueryParams } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Query Params`}
      src={AcccountGetTransactionQueryParams}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsQueryParamsPage;
