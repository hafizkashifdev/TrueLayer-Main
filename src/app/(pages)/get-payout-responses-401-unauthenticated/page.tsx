import { GetPayoutResponses401UnauthenticatedImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses401UnauthenticatedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payout _ Responses_401  Unauthenticated`}
      src={GetPayoutResponses401UnauthenticatedImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses401UnauthenticatedPage;
