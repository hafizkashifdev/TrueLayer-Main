import { AccountsGetStandingOrders1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetStandingOrders1Page = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-standing-orders-1`}
      src={AccountsGetStandingOrders1Image}
      backRoute="/accounts-get-standing-orders"
    />
  );
};

export default AccountsGetStandingOrders1Page;
