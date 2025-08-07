import { AccountsGetAccounts1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccounts1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get accounts`}
      src={AccountsGetAccounts1Image}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccounts1Page;
