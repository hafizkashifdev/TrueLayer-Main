import { GetPaymentSourcesResponsesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPaymentSourcesResponsesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payment sources Responses`}
      src={GetPaymentSourcesResponsesImage}
      backRoute="/"
      amendmentButtonRoute="/get-payment-sources"
    />
  );
};

export default GetPaymentSourcesResponsesPage;
