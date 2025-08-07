import { AcccountGetTransactionAccessDenied } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses403AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 403(Access Denied)`}
      src={AcccountGetTransactionAccessDenied}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses403AccessDeniedPage;
