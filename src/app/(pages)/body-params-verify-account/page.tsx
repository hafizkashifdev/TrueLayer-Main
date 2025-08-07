import { BodyParamsVerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BodyParamsVerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Body Params `}
      src={BodyParamsVerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default BodyParamsVerifyAccountPage;
