import { AccountsGetAccountPendingServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending service unavailable`}
      src={AccountsGetAccountPendingServiceUnavailableImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPendingServiceUnavailablePage;
