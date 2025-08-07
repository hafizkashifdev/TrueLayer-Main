import { AccountsGetAccountsResponses500InternalServerErrorHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses500InternalServerErrorHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error) Headers`}
      src={AccountsGetAccountsResponses500InternalServerErrorHeadersImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses500InternalServerErrorHeadersPage;
