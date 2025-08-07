import { AccountsGetAccountPendingMetaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingMetaPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending meta`}
      src={AccountsGetAccountPendingMetaImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPendingMetaPage;
