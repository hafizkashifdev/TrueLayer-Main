import { AcccountGetTransaction } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountTransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account transactions`}
      src={AcccountGetTransaction}
      backRoute="/accounts-get-account-trasnsactions"
    />
  );
};

export default AccountsGetAccountTransactionsPage;
