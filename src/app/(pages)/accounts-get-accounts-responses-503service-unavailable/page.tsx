import { AccountsGetAccountsResponses503ServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable)`}
      src={AccountsGetAccountsResponses503ServiceUnavailableImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses503ServiceUnavailablePage;
