import { SortCodeAccountNumberImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SortCodeAccountNumberPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Sort Code + Account Number `}
      src={SortCodeAccountNumberImage}
      backRoute="/"
      amendmentButtonRoute="/get-merchant-account-main"
    />
  );
};

export default SortCodeAccountNumberPage;
