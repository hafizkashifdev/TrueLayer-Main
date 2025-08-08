import { AccountsGetStandingOrdersResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetStandingOrdersResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-standing-orders-responses`}
      src={AccountsGetStandingOrdersResponsesImage}
      backRoute="/accounts-get-standing-orders"
    />
  );
};

export default AccountsGetStandingOrdersResponsesPage;
