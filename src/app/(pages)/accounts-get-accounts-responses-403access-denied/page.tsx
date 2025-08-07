import { AccountsGetAccountsResponses403AccessDeniedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses403AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied)`}
      src={AccountsGetAccountsResponses403AccessDeniedImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses403AccessDeniedPage;
