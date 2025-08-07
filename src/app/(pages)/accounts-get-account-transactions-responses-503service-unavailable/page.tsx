import { AcccountGetTransactionServiceUnAvailable } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 503(Service Unavailable)`}
      src={AcccountGetTransactionServiceUnAvailable}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses503ServiceUnavailablePage;
