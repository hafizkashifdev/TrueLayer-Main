import { Ok200VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Ok200VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`200(OK)`}
      src={Ok200VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default Ok200VerifyAccountPage;
