import { VerifyAccountHolderNameVerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const VerifyAccountHolderNameVerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Verify account holder name`}
      src={VerifyAccountHolderNameVerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default VerifyAccountHolderNameVerifyAccountPage;
