import { InternalServerError500VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerError500VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={InternalServerError500VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default InternalServerError500VerifyAccountPage;
