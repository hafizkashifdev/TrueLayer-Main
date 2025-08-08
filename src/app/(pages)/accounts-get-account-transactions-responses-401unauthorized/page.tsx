import { AcccountGetTransaction401UnAuthorized } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsResponses401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions Responses 401(Unauthorized)`}
      src={AcccountGetTransaction401UnAuthorized}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsResponses401UnauthorizedPage;
