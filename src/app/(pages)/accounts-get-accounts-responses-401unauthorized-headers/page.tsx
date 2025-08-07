import { AccountsGetAccountsResponses401UnauthorizedHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses401UnauthorizedHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AccountsGetAccountsResponses401UnauthorizedHeadersImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses401UnauthorizedHeadersPage;
