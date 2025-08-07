import { LegacyPaymentApiResponse403NotAuthorisedForTheActionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse403NotAuthorisedForTheActionPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 403(Not authorised for the action)`}
      src={LegacyPaymentApiResponse403NotAuthorisedForTheActionImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse403NotAuthorisedForTheActionPage;
