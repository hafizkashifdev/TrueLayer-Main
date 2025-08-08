import { GetPaymentSources403ForbiddenResponseBodyImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPaymentSources403ForbiddenResponseBodyPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payment sources 403 _ Forbidden _ Response Body`}
      src={GetPaymentSources403ForbiddenResponseBodyImage}
      backRoute="/"
      amendmentButtonRoute="/get-payment-sources"
    />
  );
};

export default GetPaymentSources403ForbiddenResponseBodyPage;
