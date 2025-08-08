import { AccountsGetAccountPending400InvalidRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountPending400InvalidRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Accounts Get account pending 400 invalid request`}
      src={AccountsGetAccountPending400InvalidRequestImage}
      backRoute="/account-get-account-pending-transaction"
    />
  );
};

export default AccountsGetAccountPending400InvalidRequestPage;
