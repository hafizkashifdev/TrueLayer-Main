import { GetPaymentSources1Image } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPaymentSources1Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payment sources 1`}
      src={GetPaymentSources1Image}
      backRoute="/"
      amendmentButtonRoute="/get-payment-sources"
    />
  );
};

export default GetPaymentSources1Page;
