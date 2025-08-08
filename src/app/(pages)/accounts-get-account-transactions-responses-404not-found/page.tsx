import { AcccountGetTransactionNotFound } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 404(Not Found)`}
      src={AcccountGetTransactionNotFound}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses404NotFoundPage;
