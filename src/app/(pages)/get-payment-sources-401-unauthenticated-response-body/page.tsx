import { GetPaymentSources401UnauthenticatedResponseBodyImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPaymentSources401UnauthenticatedResponseBodyPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payment sources 401_ unauthenticated _ Response Body`}
      src={GetPaymentSources401UnauthenticatedResponseBodyImage}
      backRoute="/"
      amendmentButtonRoute="/get-payment-sources"
    />
  );
};

export default GetPaymentSources401UnauthenticatedResponseBodyPage;
