import { HeadersVerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HeadersVerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={HeadersVerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default HeadersVerifyAccountPage;
