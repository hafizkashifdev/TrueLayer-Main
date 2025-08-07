import { GetPayoutResponses200PayoutImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses200PayoutPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payout _ Responses_200 Payout`}
      src={GetPayoutResponses200PayoutImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses200PayoutPage;
