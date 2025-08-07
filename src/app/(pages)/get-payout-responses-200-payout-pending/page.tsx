import { GetPayoutResponses200PayoutPendingImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses200PayoutPendingPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get Payout _ Responses_200 Payout_Pending`}
      src={GetPayoutResponses200PayoutPendingImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses200PayoutPendingPage;
