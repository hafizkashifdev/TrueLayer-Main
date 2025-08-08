import { AccountsGetDirectDebits2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetDirectDebits2Page = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-direct-debits-2`}
      src={AccountsGetDirectDebits2Image}
      backRoute="/accounts-get-direct-debits"
    />
  );
};

export default AccountsGetDirectDebits2Page;
