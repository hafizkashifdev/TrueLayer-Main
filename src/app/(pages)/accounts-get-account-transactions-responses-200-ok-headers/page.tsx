import { AcccountGetTransactionHeaders2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses200OkHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 200 (OK) Headers`}
      src={AcccountGetTransactionHeaders2}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses200OkHeadersPage;
