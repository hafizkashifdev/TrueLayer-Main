import { AcccountGetTransactionResponse } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountResponse1Page = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account response1`}
      src={AcccountGetTransactionResponse}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountResponse1Page;
