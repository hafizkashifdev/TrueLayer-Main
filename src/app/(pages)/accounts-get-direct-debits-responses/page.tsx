import { AccountsGetDirectDebitsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetDirectDebitsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-direct-debits-responses`}
      src={AccountsGetDirectDebitsResponsesImage}
      backRoute="/accounts-get-direct-debits"
    />
  );
};

export default AccountsGetDirectDebitsResponsesPage;
