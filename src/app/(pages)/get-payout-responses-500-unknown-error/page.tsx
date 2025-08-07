import { GetPayoutResponses500UnknownErrorImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses500UnknownErrorPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payout _ Responses_500 Unknown Error`}
      src={GetPayoutResponses500UnknownErrorImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses500UnknownErrorPage;
