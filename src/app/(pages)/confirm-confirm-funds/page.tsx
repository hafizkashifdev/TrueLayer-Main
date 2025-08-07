import { ConfirmConfirmFundsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConfirmConfirmFundsPage = () => {
  return (
    <CommonPage
      pageTitle={`Confirm funds`}
      src={ConfirmConfirmFundsImage}
      backRoute="/mandates-confirm-funds"
    />
  );
};

export default ConfirmConfirmFundsPage;
