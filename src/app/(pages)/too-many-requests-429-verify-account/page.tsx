import { TooManyRequests429VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TooManyRequests429VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`429(Too Many Requests) `}
      src={TooManyRequests429VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default TooManyRequests429VerifyAccountPage;
