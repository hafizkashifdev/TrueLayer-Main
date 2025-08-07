import { GetPayoutResponses200PayoutAuthorizedImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses200PayoutAuthorizedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get Payout _ Responses_200 Payout_Authorized`}
      src={GetPayoutResponses200PayoutAuthorizedImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses200PayoutAuthorizedPage;
