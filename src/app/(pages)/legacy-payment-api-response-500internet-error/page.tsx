import { LegacyPaymentApiResponse500InternetErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse500InternetErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 500(Internet error)`}
      src={LegacyPaymentApiResponse500InternetErrorImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse500InternetErrorPage;
