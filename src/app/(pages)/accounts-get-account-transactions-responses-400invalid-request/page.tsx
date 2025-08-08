import { AcccountGetTransaction400InvalidRequest } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses400InvalidRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 400(invalid Request)`}
      src={AcccountGetTransaction400InvalidRequest}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses400InvalidRequestPage;
