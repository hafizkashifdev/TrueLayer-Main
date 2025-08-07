import { LegacyPaymentApiResponse500InternetErrorImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse500InternetErrorPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Response 500(Internet Error)`}
      src={LegacyPaymentApiResponse500InternetErrorImage1}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse500InternetErrorPage1;
