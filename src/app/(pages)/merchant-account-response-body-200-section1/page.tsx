import { MerchantAccountResponseBody200Image } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MerchantAccountResponseBody200Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / Merchant Account _ Response Body_200`}
      src={MerchantAccountResponseBody200Image}
      backRoute="/"
      amendmentButtonRoute="/get-merchant-account-main"
    />
  );
};

export default MerchantAccountResponseBody200Page;
