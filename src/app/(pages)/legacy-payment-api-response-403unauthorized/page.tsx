import { LegacyPaymentApiResponse403UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse403UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 403(Unauthorized)`}
      src={LegacyPaymentApiResponse403UnauthorizedImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse403UnauthorizedPage;
