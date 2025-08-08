import { AcccountGetTransactionRateLimitExceeded } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 429(Rate Limit Exceeded)`}
      src={AcccountGetTransactionRateLimitExceeded}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses429RateLimitExceededPage;
