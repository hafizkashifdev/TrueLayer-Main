import { AcccountGetTransactionHeaders8 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses429RateLimitExceededHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 429(Rate Limit Exceeded) Headers`}
      src={AcccountGetTransactionHeaders8}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses429RateLimitExceededHeadersPage;
