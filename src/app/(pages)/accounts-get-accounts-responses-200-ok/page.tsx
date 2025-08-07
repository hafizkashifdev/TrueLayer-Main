import { AccountsGetAccountsResponses200OkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses200OkPage = () => {
  return (
    <CommonPage
      pageTitle={`200 (OK)`}
      src={AccountsGetAccountsResponses200OkImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses200OkPage;
