import { GetPayoutResponsesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GetPayoutResponsesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Get payout _ Responses`}
      src={GetPayoutResponsesImage}
      backRoute="/"
      amendmentButtonRoute="/get-payout"
    />
  );
};

export default GetPayoutResponsesPage;
