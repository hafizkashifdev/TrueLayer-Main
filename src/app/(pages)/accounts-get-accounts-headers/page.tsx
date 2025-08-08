import { AccountsGetAccountsHeadersImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AccountsGetAccountsHeadersImage1}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsHeadersPage;
