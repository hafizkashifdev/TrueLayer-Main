import { AccountsGetAccountsResponses500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={AccountsGetAccountsResponses500InternalServerErrorImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses500InternalServerErrorPage;
