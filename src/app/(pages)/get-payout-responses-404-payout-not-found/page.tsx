import { GetPayoutResponses404PayoutNotFoundImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses404PayoutNotFoundPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get Payout _ Responses_404 Payout Not Found`}
      src={GetPayoutResponses404PayoutNotFoundImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses404PayoutNotFoundPage;
