import { Unauthorized401VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized401VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={Unauthorized401VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default Unauthorized401VerifyAccountPage;
