import { AccountsGetAccountPending401AccessDeniedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPending401AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending 401 access denied `}
      src={AccountsGetAccountPending401AccessDeniedImage}
      backRoute="/"
    />
  );
};

export default AccountsGetAccountPending401AccessDeniedPage;
