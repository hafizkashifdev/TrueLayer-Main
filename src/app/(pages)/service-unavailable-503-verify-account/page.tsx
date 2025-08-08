import { ServiceUnavailable503VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable) `}
      src={ServiceUnavailable503VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default ServiceUnavailable503VerifyAccountPage;
