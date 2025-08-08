import { AcccountGetTransactionInterServerError } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 500(Internal Server Error)`}
      src={AcccountGetTransactionInterServerError}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses500InternalServerErrorPage;
