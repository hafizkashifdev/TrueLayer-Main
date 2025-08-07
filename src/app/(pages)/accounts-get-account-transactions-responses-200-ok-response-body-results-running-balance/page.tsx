import { AcccountGetTransactionRunningBody } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses200OkResponseBodyResultsRunningBalancePage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 200 (OK) Response Body results  running_balance`}
      src={AcccountGetTransactionRunningBody}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses200OkResponseBodyResultsRunningBalancePage;
