import { AccountsGetAccountsResponses401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={AccountsGetAccountsResponses401UnauthorizedImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses401UnauthorizedPage;
