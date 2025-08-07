import { AccountsGetAccountPendingMetaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingMetaPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending meta`}
      src={AccountsGetAccountPendingMetaImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPendingMetaPage;
