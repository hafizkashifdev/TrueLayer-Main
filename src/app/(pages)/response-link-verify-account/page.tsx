import { ResponseLinkVerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseLinkVerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={ResponseLinkVerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default ResponseLinkVerifyAccountPage;
