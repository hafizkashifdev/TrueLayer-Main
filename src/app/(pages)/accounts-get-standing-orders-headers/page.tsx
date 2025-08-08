import { AccountsGetStandingOrdersHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetStandingOrdersHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`accounts-get-standing-orders-headers`}
      src={AccountsGetStandingOrdersHeadersImage}
      backRoute="/accounts-get-standing-orders"
    />
  );
};

export default AccountsGetStandingOrdersHeadersPage;
