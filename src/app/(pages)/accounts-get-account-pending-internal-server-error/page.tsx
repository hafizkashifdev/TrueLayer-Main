import { AccountsGetAccountPendingInternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPendingInternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending internal server error`}
      src={AccountsGetAccountPendingInternalServerErrorImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPendingInternalServerErrorPage;
