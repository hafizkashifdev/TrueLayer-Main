import { AccountsGetAccountPending404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPending404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending 404 not found`}
      src={AccountsGetAccountPending404NotFoundImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPending404NotFoundPage;
