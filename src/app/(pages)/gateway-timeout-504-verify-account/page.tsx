import { GatewayTimeout504VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GatewayTimeout504VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`504(Gateway Timeout)`}
      src={GatewayTimeout504VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default GatewayTimeout504VerifyAccountPage;
