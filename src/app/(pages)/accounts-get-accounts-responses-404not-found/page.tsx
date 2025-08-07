import { AccountsGetAccountsResponses404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`404(Not Found)`}
      src={AccountsGetAccountsResponses404NotFoundImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses404NotFoundPage;
