import { AccountsGetDirectDebitsHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetDirectDebitsHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-direct-debits-headers`}
      src={AccountsGetDirectDebitsHeadersImage}
      backRoute="/accounts-get-direct-debits"
    />
  );
};

export default AccountsGetDirectDebitsHeadersPage;
