import { LegacyPaymentApiResponse500InternetError1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse500InternetError1Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500(Internet Error)`}
      src={LegacyPaymentApiResponse500InternetError1Image}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse500InternetError1Page;
