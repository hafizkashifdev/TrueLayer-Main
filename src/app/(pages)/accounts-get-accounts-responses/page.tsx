import { AccountsGetAccountsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` Responses`}
      src={AccountsGetAccountsResponsesImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponsesPage;
