import { AcccountGetTransactionHeaders5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses401UnauthorizedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 401(Unauthorized) Headers`}
      src={AcccountGetTransactionHeaders5}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses401UnauthorizedHeadersPage;
