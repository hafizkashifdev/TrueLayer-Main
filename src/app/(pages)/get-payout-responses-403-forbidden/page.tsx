import { GetPayoutResponses403ForbiddenImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponses403ForbiddenPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payout _ Responses_403 Forbidden`}
      src={GetPayoutResponses403ForbiddenImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponses403ForbiddenPage;
